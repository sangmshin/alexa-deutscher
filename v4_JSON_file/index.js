"use strict";
const Alexa = require("alexa-sdk"); // import the library

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = 'amzn1.ask.skill.e31e25dc-5f55-4554-bc34-72654b7dae8c';

// =====================================================================================================
// --------------------------------- Section 1. Data and Text strings  ---------------------------------
// =====================================================================================================
//TODO: Replace this data with your own.
//======================================================================================================
var fs = require("fs");
var contents = fs.readFileSync("./employees.json");
var data = JSON.parse(contents);

//console.log("First Name:", data[1].firstName);
//console.log("Last Name:", data[1].lastName);
//console.log("Seat Location:", data[1].seatlocation);

for (var i = 0; i < data.length; i++){
    
    data[i].firstName = data[i].firstName.toLowerCase();
    data[i].lastName = data[i].lastName.toLowerCase();
    
    console.log("Name:", data[i].firstName, data[i].lastName);
//    console.log("Last Name:", data[i].lastName);

}

//======================================================================================================
//TODO: Replace these text strings to edit the welcome and help messages
//======================================================================================================

var skillName = "Deutscher Lookup. ";

//This is the welcome message for when a user starts the skill without a specific intent.
var WELCOME_MESSAGE = "Welcome to " + skillName + "Learn about Deutschers and their info. For example, " + getGenericHelpMessage(data);

//This is the message a user will hear when they ask Alexa for help in your skill.
var HELP_MESSAGE = "I can help you find Deutschers and their info. ";

//This is the message a user will hear when they begin a new search
var NEW_SEARCH_MESSAGE = getGenericHelpMessage(data);

//This is the message a user will hear when they ask Alexa for help while in the SEARCH state
var SEARCH_STATE_HELP_MESSAGE = getGenericHelpMessage(data);

var DESCRIPTION_STATE_HELP_MESSAGE = "Here are some things you can say: Tell me more, or give me his or her contact info";

var MULTIPLE_RESULTS_STATE_HELP_MESSAGE = "Sorry, please say the first and last name of the Deutscher you'd like to learn more about";

// This is the message use when the decides to end the search
//var SHUTDOWN_MESSAGE = "Ok.";
var SHUTDOWN_MESSAGE = "<say-as interpret-as='interjection'>good luck</say-as>";

//This is the message a user will hear when they try to cancel or stop the skill.
//var EXIT_SKILL_MESSAGE = "Ok.";
var EXIT_SKILL_MESSAGE = "<say-as interpret-as='interjection'>well well</say-as>, see you next time.";

// =====================================================================================================
// ------------------------------ Section 2. Skill Code - Intent Handlers  -----------------------------
// =====================================================================================================
// CAUTION: Editing anything below this line might break your skill.
//======================================================================================================

var states = {
    SEARCHMODE: "_SEARCHMODE",
    DESCRIPTION: "_DESCRIPTION",
    MULTIPLE_RESULTS: "_MULTIPLE_RESULTS"
};

const newSessionHandlers = {
    "LaunchRequest": function () {
        this.handler.state = states.SEARCHMODE;
        this.emit(":ask", WELCOME_MESSAGE, getGenericHelpMessage(data));
    },
    "SearchByNameIntent": function () {
        console.log("SEARCH INTENT");
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    },
    "TellMeMoreIntent": function () {
        this.handler.state = states.SEARCHMODE;
        this.emit(":ask", WELCOME_MESSAGE, getGenericHelpMessage(data));
    },
    "TellMeThisIntent": function () {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    },
    "SearchByInfoTypeIntent": function () {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByInfoTypeIntent");
    },
    "AMAZON.YesIntent": function () {
        this.emit(":ask", getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "AMAZON.NoIntent": function () {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function () {
        this.emit(":ask", HELP_MESSAGE, getGenericHelpMessage(data));
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.StartOverIntent": function () {
        this.handler.state = states.SEARCHMODE;
        var output = "<say-as interpret-as='interjection'>well well</say-as>, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "AMAZON.HelpIntent": function () {
        this.emit(":ask", HELP_MESSAGE + getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "SessionEndedRequest": function () {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function () {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    }
};
var startSearchHandlers = Alexa.CreateStateHandler(states.SEARCHMODE, {
    "AMAZON.YesIntent": function () {
        this.emit(":ask", NEW_SEARCH_MESSAGE, NEW_SEARCH_MESSAGE);
    },
    "AMAZON.NoIntent": function () {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function () {
        var output;
        if (this.attributes.lastSearch) {
            output = this.attributes.lastSearch.lastSpeech;
            console.log("repeating last speech");
        } else {
            output = getGenericHelpMessage(data);
            console.log("no last speech availble. outputting standard help message.");
        }
        this.emit(":ask", output, output);
    },
    "SearchByNameIntent": function () {
        searchByNameIntentHandler.call(this);
    },
    "SearchByCityIntent": function () {
        searchByCityIntentHandler.call(this);
    },
    "SearchByInfoTypeIntent": function () {
        searchByInfoTypeIntentHandler.call(this);
    },
    "TellMeThisIntent": function () {
        this.handler.state = states.DESCRIPTION;
        this.emitWithState("TellMeThisIntent");
    },
    "TellMeMoreIntent": function () {
        this.handler.state = states.DESCRIPTION;
        this.emitWithState("TellMeMoreIntent");
    },
    "AMAZON.HelpIntent": function () {
        this.emit(":ask", getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.StartOverIntent": function () {
        this.handler.state = states.SEARCHMODE;
        var output = "<say-as interpret-as='interjection'>okey dokey</say-as>, starting over. " + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "SessionEndedRequest": function () {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function () {
        console.log("Unhandled intent in startSearchHandlers");
        this.emit(":ask", SEARCH_STATE_HELP_MESSAGE, SEARCH_STATE_HELP_MESSAGE);
    }
});
var multipleSearchResultsHandlers = Alexa.CreateStateHandler(states.MULTIPLE_RESULTS, {

    "AMAZON.StartOverIntent": function () {
        this.handler.state = states.SEARCHMODE;
        var output = "<say-as interpret-as='interjection'>okey dokey</say-as>, starting over. " + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "AMAZON.YesIntent": function () {
        var output = "Hmm. I think you said - yes, but can you please say the name of the Deutscher you'd like to learn more about?";
        this.emit(":ask", output, output);
    },
    "AMAZON.NoIntent": function () {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function () {
        this.emit(":ask", this.attributes.lastSearch.lastSpeech, this.attributes.lastSearch.lastSpeech);
    },
    "SearchByNameIntent": function () {
        var slots = this.event.request.intent.slots;
        var firstName = isSlotValid(this.event.request, "firstName");
        var lastName = isSlotValid(this.event.request, "lastName");
        var cityName = isSlotValid(this.event.request, "cityName");
        var infoType = isSlotValid(this.event.request, "infoType");

        // firstName = firstName.toLowerCase();
        // lastName = lastName.toLowerCase();

        console.log("firstName:" + firstName);
        console.log("lastName:" + lastName);
        console.log("cityName:" + cityName);
        console.log("infoType:" + infoType);
        console.log("Intent Name:" + this.event.request.intent.name);

        var canSearch = figureOutWhichSlotToSearchBy(firstName, lastName, cityName);
        console.log("Multiple results found. canSearch is set to = " + canSearch);
        var speechOutput;

        if (canSearch) {

            var searchQuery = slots[canSearch].value;
            var searchResults = searchDatabase(this.attributes.lastSearch.results, searchQuery, canSearch);
            var lastSearch;
            var output;

            if (searchResults.count > 1) { //multiple results found again
                console.log("multiple results were found again");
                this.handler.state = states.MULTIPLE_RESULTS;
                output = this.attributes.lastSearch.lastSpeech;
                this.emit(":ask", output);
            } else if (searchResults.count == 1) { //one result found
                this.attributes.lastSearch = searchResults;
                lastSearch = this.attributes.lastSearch;
                this.handler.state = states.DESCRIPTION;
                output = generateSearchResultsMessage(searchQuery, searchResults.results);
                this.attributes.lastSearch.lastSpeech = output;
                this.emit(":ask", output);

            } else { //no match found
                lastSearch = this.attributes.lastSearch;
                var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
                speechOutput = MULTIPLE_RESULTS_STATE_HELP_MESSAGE + ", " + listOfPeopleFound;
                this.emit(":ask", speechOutput);
            }
        }
    },
    "SearchByCityIntent": function () {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByCityIntent");
    },
    "AMAZON.HelpIntent": function () {
        this.emit(":ask", MULTIPLE_RESULTS_STATE_HELP_MESSAGE, MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "SessionEndedRequest": function () {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function () {
        console.log("Unhandled intent in multipleSearchResultsHandlers");
        this.emit(":ask", MULTIPLE_RESULTS_STATE_HELP_MESSAGE, MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
    }
});
var descriptionHandlers = Alexa.CreateStateHandler(states.DESCRIPTION, {
    "TellMeMoreIntent": function () {
        var person;
        var speechOutput;
        var repromptSpeech;
        var cardContent;

        if (this.attributes.lastSearch) {
            person = this.attributes.lastSearch.results[0];
            cardContent = generateCard(person); //calling the helper function to generate the card content that will be sent to the Alexa app.
            speechOutput = generateTellMeMoreMessage(person);
            repromptSpeech = "Would you like to find another Deutscher? Say yes or no";

            console.log("the contact you're trying to find more info about is " + person.firstName);
            this.handler.state = states.SEARCHMODE;
            this.attributes.lastSearch.lastSpeech = speechOutput;
            this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body, cardContent.image);
        } else {
            speechOutput = getGenericHelpMessage(data);
            repromptSpeech = getGenericHelpMessage(data);
            this.handler.state = states.SEARCHMODE;
            this.emit(":ask", speechOutput, repromptSpeech);
        }
    },
    "TellMeThisIntent": function () {
        var slots = this.event.request.intent.slots;
        var person = this.attributes.lastSearch.results[0];
        var infoType = isSlotValid(this.event.request, "infoType");
        var speechOutput;
        var repromptSpeech;
        var cardContent;

        console.log(isInfoTypeValid("title"));

        if (this.attributes.lastSearch && isInfoTypeValid(infoType)) {
            person = this.attributes.lastSearch.results[0];
            cardContent = generateCard(person);
            speechOutput = generateSpecificInfoMessage(slots, person);
            repromptSpeech = "Would you like to find another Deutscher? Say yes or no";
            this.handler.state = states.SEARCHMODE;
            this.attributes.lastSearch.lastSpeech = speechOutput;
            this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body, cardContent.image);
        } else {
            //not a valid slot. no card needs to be set up. respond with simply a voice response.
            speechOutput = generateSearchHelpMessage(person.gender);
            repromptSpeech = "You can ask me - what's " + genderize("his-her", person.gender) + " department, phone number, seat location or give me " + genderize("his-her", person.gender) + " title";
            this.attributes.lastSearch.lastSpeech = speechOutput;
            this.handler.state = states.SEARCHMODE;
            this.emit(":ask", speechOutput, repromptSpeech);
        }
    },
    "SearchByNameIntent": function () {
        searchByNameIntentHandler.call(this);
    },
    "SearchByCityIntent": function () {
        searchByCityIntentHandler.call(this);
    },
    "AMAZON.HelpIntent": function () {
        var person = this.attributes.lastSearch.results[0];
        this.emit(":ask", generateNextPromptMessage(person, "current"), generateNextPromptMessage(person, "current"));
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.NoIntent": function () {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.YesIntent": function () {
        this.emit("TellMeMoreIntent");
    },
    "AMAZON.RepeatIntent": function () {
        this.emit(":ask", this.attributes.lastSearch.lastSpeech, this.attributes.lastSearch.lastSpeech);
    },
    "AMAZON.StartOverIntent": function () {
        this.handler.state = states.SEARCHMODE;
        var output = "<say-as interpret-as='interjection'>okey dokey</say-as>, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "SessionEndedRequest": function () {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function () {
        var person = this.attributes.lastSearch.results[0];
        console.log("Unhandled intent in DESCRIPTION state handler");
        this.emit(":ask", "Sorry, I don't know that" + generateNextPromptMessage(person, "general"), "Sorry, I don't know that" + generateNextPromptMessage(person, "general"));
    }
});

// ------------------------- END of Intent Handlers  ---------------------------------

function searchDatabase(dataset, searchQuery, searchType) {
    var matchFound = false;
    var results = [];

    //beginning search
    for (var i = 0; i < dataset.length; i++) {
        if (sanitizeSearchQuery(searchQuery) == dataset[i][searchType]) {
            results.push(dataset[i]);
            matchFound = true;
        }
        if ((i == dataset.length - 1) && (matchFound == false)) {
            //this means that we are on the last record, and no match was found
            matchFound = false;
            console.log("no match was found using " + searchType);
            //if more than searchable items were provided, set searchType to the next item, and set i=0
            //ideally you want to start search with lastName, then firstname, and then cityName
        }
    }
    return {
        count: results.length,
        results: results
    };
}

function figureOutWhichSlotToSearchBy(firstName, lastName, cityName) {
    if (lastName) {
        console.log("search by lastName");
        return "lastName";
    } else if (!lastName && firstName) {
        console.log("search by firstName");
        return "firstName";
    } else if (!lastName && !firstName && cityName) {
        console.log("search by cityName");
        return "cityName";
    } else {
        console.log("no valid slot provided. can't search.");
        return false;
    }
}


function searchByNameIntentHandler() {
    var firstName = isSlotValid(this.event.request, "firstName");
    var lastName = isSlotValid(this.event.request, "lastName");
    var cityName = isSlotValid(this.event.request, "cityName");
    var infoType = isSlotValid(this.event.request, "infoType");

    var canSearch = figureOutWhichSlotToSearchBy(firstName, lastName, cityName);
    console.log("canSearch is set to = " + canSearch);

    if (canSearch) {
        var searchQuery = this.event.request.intent.slots[canSearch].value;
        var searchResults = searchDatabase(data, searchQuery, canSearch);

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("Search complete. Multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery, searchResults.results) + listOfPeopleFound + ". Who would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            this.handler.state = states.DESCRIPTION; // change state to description
            console.log("one match was found");
            if (infoType) {
                //if a specific infoType was requested, redirect to specificInfoIntent
                console.log("infoType was provided as well");
                this.emitWithState("TellMeThisIntent");
            } else {
                console.log("no infoType was provided.");
                output = generateSearchResultsMessage(searchQuery, searchResults.results);
                this.attributes.lastSearch.lastSpeech = output;
                this.emit(":ask", output);
            }
        } else { //no match found
            console.log("no match found");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);
            output = generateSearchResultsMessage(searchQuery, searchResults.results);
            this.attributes.lastSearch.lastSpeech = output;
            // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
            this.emit(":ask", output);
        }
    } else {
        console.log("no searchable slot was provided");
        console.log("searchQuery was  = " + searchQuery);
        console.log("searchResults.results was  = " + searchResults);

        this.emit(":ask", generateSearchResultsMessage(searchQuery, false));
    }
}

function searchByCityIntentHandler() {
    var slots = this.event.request.intent.slots;
    var cityName = isSlotValid(this.event.request, "cityName");

    if (cityName) {
        var searchQuery = slots.cityName.value;
        console.log("will begin search with  " + slots.cityName.value + " in cityName");
        var searchResults = searchDatabase(data, searchQuery, "cityName");

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("Search completed by city. Multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery, searchResults.results) + listOfPeopleFound + ". Who would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            console.log("one match found");
            this.handler.state = states.DESCRIPTION; // change state to description
            output = generateSearchResultsMessage(searchQuery, searchResults.results);
            this.attributes.lastSearch.lastSpeech = output;
            // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
            this.emit(":ask", output);

        } else { //no match found
            console.log("no match found");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);
            output = generateSearchResultsMessage(searchQuery, searchResults.results);
            this.attributes.lastSearch.lastSpeech = output;
            // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
            this.emit(":ask", output);

        }
    } else {
        console.log("no searchable slot was provided");
        console.log("searchQuery was  = " + searchQuery);
        console.log("searchResults.results was  = " + searchResults);

        this.emit(":ask", generateSearchResultsMessage(searchQuery, false));
    }
}

function searchByInfoTypeIntentHandler() {
    var slots = this.event.request.intent.slots;
    var firstName = isSlotValid(this.event.request, "firstName");
    var lastName = isSlotValid(this.event.request, "lastName");
    var cityName = isSlotValid(this.event.request, "cityName");
    var infoType = isSlotValid(this.event.request, "infoType");

    var canSearch = figureOutWhichSlotToSearchBy(firstName, lastName, cityName);
    console.log("canSearch is set to = " + canSearch);

    if (canSearch) {
        var searchQuery = slots[canSearch].value;
        var searchResults = searchDatabase(data, searchQuery, canSearch);

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery, searchResults.results) + listOfPeopleFound + ". Who would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            this.handler.state = states.DESCRIPTION; // change state to description
            console.log("one match was found");
            if (infoType) {
                //if a specific infoType was requested, redirect to specificInfoIntent
                console.log("infoType was provided as well");
                var person = this.attributes.lastSearch.results[0];
                var cardContent = generateCard(person);
                var speechOutput = generateSpecificInfoMessage(slots, person);
                var repromptSpeech = "Would you like to find another Deutscher? Say yes or no";
                this.attributes.lastSearch.lastSpeech = speechOutput;
                this.handler.state = states.SEARCHMODE;
                this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body, cardContent.image);
                // this.emitWithState("TellMeThisIntent");
            } else {
                console.log("no infoType was provided.");
                output = generateSearchResultsMessage(searchQuery, searchResults.results);
                this.attributes.lastSearch.lastSpeech = output;
                // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
                this.emit(":ask", output);
            }
        } else { //no match found
            console.log("no match found");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);
            output = generateSearchResultsMessage(searchQuery, searchResults.results);
            this.attributes.lastSearch.lastSpeech = output;
            // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
            this.emit(":ask", output);
        }
    } else {
        console.log("no searchable slot was provided");
        console.log("searchQuery was  = " + searchQuery);
        console.log("searchResults.results was  = " + searchResults);

        this.emit(":ask", generateSearchResultsMessage(searchQuery, false));
    }
}
// =====================================================================================================
// ------------------------------- Section 3. Generating Speech Messages -------------------------------
// =====================================================================================================

function generateNextPromptMessage(person, mode) {
    var infoTypes = ["department", "title", "phone number", "seat location"];
    var prompt;

    if (mode == "current") {
        // if the mode is current, we should give more informaiton about the current contact
        prompt = ". You can say - tell me more, or  tell me " + genderize("his-her", person.gender) + " " + infoTypes[getRandom(0, infoTypes.length - 1)];
    }
    //if the mode is general, we should provide general help information
    else if (mode == "general") {
        prompt = ". " + getGenericHelpMessage(data);
    }
    return prompt;
}

//this might no neccessary
function generateSendingCardToAlexaAppMessage(person, mode) {
    var sentence = "I have sent " + person.firstName + "'s contact card to your Alexa app" + generateNextPromptMessage(person, mode);
    return sentence;
}


// VERY FIRST RESPONSE
function generateSearchResultsMessage(searchQuery, results) {
    var sentence;
    var details;
    var prompt;

    if (results) {
        switch (true) {
            case (results.length == 0):
                sentence = "Hmm. I couldn't find " + searchQuery + ". " + getGenericHelpMessage(data);
                break;
            case (results.length == 1):
                var person = results[0];
                details = person.firstName + " " + person.lastName + " is " + person.title + ", based out of " + person.cityName + ". " + genderize("his-her", person.gender) + " phone number is " + person.number + " . ";
                prompt = generateNextPromptMessage(person, "current");
                sentence = details + prompt;
                console.log(sentence);
                break;
            case (results.length > 1):
                sentence = "I found " + results.length + " matching results";
                break;
        }
    } else {
        sentence = "Sorry, I didn't quite get that. " + getGenericHelpMessage(data);
    }
    return sentence;
}

function getGenericHelpMessage(data) {
    // var sentences = ["ask - who is " + getRandomName(data), "say - find an Deutscher in " + getRandomCity(data)];
    var sentences = ["ask - who is " + getRandomName(data), "say - what is " + getRandomName(data) + "'s " + getRandomInfoType()];
    return "You can " + sentences[getRandom(0, sentences.length - 1)];
}

function generateSearchHelpMessage(gender) {
    var sentence = "Sorry, I don't know that. You can ask me - what's " + genderize("his-her", gender) + " department, phone number, seat location or give me " + genderize("his-her", gender) + " title";
    return sentence;
}

//When Alexa is asked "Tell me more"
function generateTellMeMoreMessage(person) {
    // var sentence = person.firstName + " joined the Deutsch in " + person.joinDate + ". " + genderize("his-her", person.gender) + " department is " + person.department + " . " + generateSendingCardToAlexaAppMessage(person, "general");
    var sentence = person.firstName + "'s " + "department is " + person.department + " and " + genderize("his-her", person.gender) + " phone number is " + person.number + " and " + genderize("his-her", person.gender) + " seat location is " + person.seatlocation + " on " + whichFloor(person.seatlocation) + "th floor. " + generateSendingCardToAlexaAppMessage(person, "general");
    return sentence;
}

function generateSpecificInfoMessage(slots, person) {
    var infoTypeValue;
    var sentence;

    infoTypeValue = slots.infoType.value;

    if (slots.infoType.value == "phone number" || slots.infoType.value == "number") {
        infoTypeValue = "number";
        console.log("remove space between words");
    } else if (slots.infoType.value == "seat location" || slots.infoType.value == "location" || slots.infoType.value == "seat") {
        infoTypeValue = "seatlocation";
        console.log("remove space between words");
    } else {
        console.log("no removing space needed");
        infoTypeValue = slots.infoType.value;
    }

    // sentence = person.firstName + "'s " + infoTypeValue.toLowerCase() + " is - " + person[infoTypeValue.toLowerCase()] + " . Would you like to find another Deutscher? " + getGenericHelpMessage(data);

    if (infoTypeValue == "seatlocation") {
        sentence = person.firstName + "'s seat location is - " + person[infoTypeValue] + " on " + whichFloor(person[infoTypeValue]) + "th floor. Would you like to find another Deutscher? " + getGenericHelpMessage(data);
    } else {
        sentence = person.firstName + "'s " + infoTypeValue + " is - " + person[infoTypeValue] + ". Would you like to find another Deutscher? " + getGenericHelpMessage(data);
    }
    // return optimizeForSpeech(sentence);
    return sentence;
}

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(newSessionHandlers, startSearchHandlers, descriptionHandlers, multipleSearchResultsHandlers);
    alexa.execute();
};

// =====================================================================================================
// ------------------------------------ Section 4. Helper Functions  -----------------------------------
// =====================================================================================================
// For more helper functions, visit the Alexa cookbook at https://github.com/alexa/alexa-cookbook
//======================================================================================================

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomCity(arrayOfStrings) {
    //return arrayOfStrings[getRandom(0, data.length - 1)].cityName;
}

function getRandomName(arrayOfStrings) {
    var randomNumber = getRandom(0, data.length - 1);
    return arrayOfStrings[randomNumber].firstName + " " + arrayOfStrings[randomNumber].lastName;
}

function getRandomDepartment(arrayOfStrings) {
    return arrayOfStrings[getRandom(0, data.length - 1)].department;
}

function getRandomInfoType() {
    var infoTypes = ["department", "title", "phone number", "seat location"];
    return infoTypes[getRandom(0, infoTypes.length - 1)]
}

function titleCase(str) {
    return str.replace(str[0], str[0].toUpperCase());
}

function generateCard(person) {
    var cardTitle = "Contact Info for " + titleCase(person.firstName) + " " + titleCase(person.lastName);
    // var cardBody = "Department: " + "@" + person.department + " \n" + "Title: " + person.title + " \n" + "number: " + person.number;
    var cardBody = "Department: " + person.department + " \n" + "Title: " + person.title + " \n" + "number: " + person.number + " \n" + "Seat Location: " + person.seatlocation;
    var imageObj = {
        smallImageUrl: "https://s3.amazonaws.com/deutscherlookup/" + person.firstName + ".jpg",
        largeImageUrl: "https://s3.amazonaws.com/deutscherlookup/" + person.firstName + ".jpg",
    };
    return {
        "title": cardTitle,
        "body": cardBody,
        "image": imageObj
    };
}

function loopThroughArrayOfObjects(arrayOfStrings) {
    var joinedResult = "";
    // Looping through the each object in the array
    for (var i = 0; i < arrayOfStrings.length; i++) {
        //concatenating names (firstName + lastName ) for each item
        joinedResult = joinedResult + ", " + arrayOfStrings[i].firstName + " " + arrayOfStrings[i].lastName;
    }
    return joinedResult;
}

function genderize(type, gender) {
    var pronouns = {
        "m": {
            "he-she": "he",
            "his-her": "his",
            "him-her": "him"
        },
        "f": {
            "he-she": "she",
            "his-her": "her",
            "him-her": "her"
        }
    };
    return pronouns[gender][type];
}

function sanitizeSearchQuery(searchQuery) {
    searchQuery = searchQuery.replace(/’s/g, "").toLowerCase();
    searchQuery = searchQuery.replace(/'s/g, "").toLowerCase();
    return searchQuery;
}

function optimizeForSpeech(str) {
    var optimizedString = str.replace("title", "title");
    return optimizedString;
}

function isSlotValid(request, slotName) {
    var slot = request.intent.slots[slotName];
    //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
    var slotValue;

    //if we have a slot, get the text and store it into speechOutput
    if (slot && slot.value) {
        //we have a value in the slot
        slotValue = slot.value.toLowerCase();
        return slotValue;
    } else {
        //we didn't get a value in the slot.
        return false;
    }
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function isInfoTypeValid(infoType) {
    var validTypes = ["department", "title", "phone number", "seat location"];
    return isInArray(infoType, validTypes);
}

function whichFloor(seatlocation) {
    var floorNumber = String(seatlocation).charAt(1);
    var floor = '1' + floorNumber;
    return floor;
}