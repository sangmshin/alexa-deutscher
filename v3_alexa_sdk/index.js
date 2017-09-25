"use strict";
const Alexa = require("alexa-sdk"); // import the library

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = 'amzn1.ask.skill.0897f940-a3b2-4f50-943b-821e3ab79ed0';

// =====================================================================================================
// --------------------------------- Section 1. Data and Text strings  ---------------------------------
// =====================================================================================================
//TODO: Replace this data with your own.
//======================================================================================================

var data = [{
        "fullname": "Winston Binch",
        "fullname_lc": "winston binch",
        "firstName": "winston",
        "lastName": "binch",
        "cityName": "new york",
        "department": "Executive L.A.",
        "title": "Chief Digital Officer, North America",
        "number": "310.862.3510",
        "seatlocation": "1322-37",
        "gender": "m"
    },
    {
        "fullname": "Andy Achsen",
        "fullname_lc": "andy achsen",
        "firstName": "andy",
        "lastName": "achsen",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "Proofreader",
        "number": "212-981-7903",
        "seatlocation": "1322-37",
        "gender": "m"
    },
    {
        "fullname": "Samantha Addy",
        "fullname_lc": "samantha addy",
        "firstName": "samantha",
        "lastName": "addy",
        "cityName": "new york",
        "department": "Content Production",
        "title": "Associate Producer",
        "number": "212-981-7731",
        "seatlocation": "1322-26",
        "gender": "f"
    },
    {
        "fullname": "Kemi Adewumi",
        "fullname_lc": "kemi adewumi",
        "firstName": "kemi",
        "lastName": "adewumi",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Supervisor",
        "number": "212-981-7626",
        "seatlocation": "1433-04",
        "gender": "f"
    },
    {
        "fullname": "Carlos Agosto",
        "fullname_lc": "carlos agosto",
        "firstName": "carlos",
        "lastName": "agosto",
        "cityName": "new york",
        "department": "Digital Creative",
        "title": "Senior Digital Developer",
        "number": "212-981-7801",
        "seatlocation": "1420-24",
        "gender": "m"
    },
    {
        "fullname": "Anastasia Agrapides",
        "fullname_lc": "anastasia agrapides",
        "firstName": "anastasia",
        "lastName": "agrapides",
        "cityName": "new york",
        "department": "Integrated Business Affairs",
        "title": "Business Affairs Coordinator",
        "number": "212-981-7560",
        "seatlocation": "1322-31",
        "gender": "f"
    },
    {
        "fullname": "Virginia Albert",
        "fullname_lc": "virginia albert",
        "firstName": "virginia",
        "lastName": "albert",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-8085",
        "seatlocation": "1312-07",
        "gender": "f"
    },
    {
        "fullname": "Joseph Amat",
        "fullname_lc": "joseph amat",
        "firstName": "joseph",
        "lastName": "amat",
        "cityName": "new york",
        "department": "Media",
        "title": "Assistant Media Planner",
        "number": "212-981-7707",
        "seatlocation": "1312-09",
        "gender": "m"
    },
    {
        "fullname": "Cohan Andersen",
        "fullname_lc": "cohan andersen",
        "firstName": "cohan",
        "lastName": "andersen",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Editor",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Viktor Angwald",
        "fullname_lc": "viktor angwald",
        "firstName": "viktor",
        "lastName": "angwald",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-8064",
        "seatlocation": "1415-16",
        "gender": "m"
    },
    {
        "fullname": "Sheldon Anthony",
        "fullname_lc": "sheldon anthony",
        "firstName": "sheldon",
        "lastName": "anthony",
        "cityName": "new york",
        "department": "Studio",
        "title": "Graphics Business Manager",
        "number": "212-981-7630",
        "seatlocation": "1322-43",
        "gender": "m"
    },
    {
        "fullname": "Becca Antonucci",
        "fullname_lc": "becca antonucci",
        "firstName": "becca",
        "lastName": "antonucci",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-7753",
        "seatlocation": "1420-25",
        "gender": "f"
    },
    {
        "fullname": "Gabriel Aponte",
        "fullname_lc": "gabriel aponte",
        "firstName": "gabriel",
        "lastName": "aponte",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Supervisor",
        "number": "212-981-7929",
        "seatlocation": "1433-33",
        "gender": "f"
    },
    {
        "fullname": "Anthony Arfi",
        "fullname_lc": "anthony arfi",
        "firstName": "anthony",
        "lastName": "arfi",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Assistant Editor",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Beth Armstrong",
        "fullname_lc": "beth armstrong",
        "firstName": "beth",
        "lastName": "armstrong",
        "cityName": "new york",
        "department": "Creative",
        "title": "Talent Manager",
        "number": "212-981-7955",
        "seatlocation": "1420-47",
        "gender": "f"
    },
    {
        "fullname": "Andrew Arnot",
        "fullname_lc": "andrew arnot",
        "firstName": "andrew",
        "lastName": "arnot",
        "cityName": "new york",
        "department": "Account Management",
        "title": "SVP, Account Director",
        "number": "212-981-7826",
        "seatlocation": "1433-02",
        "gender": "m"
    },
    {
        "fullname": "Garett Awad",
        "fullname_lc": "garett awad",
        "firstName": "garett",
        "lastName": "awad",
        "cityName": "new york",
        "department": "Strategy",
        "title": "VP, Strategist",
        "number": "212-981-8045",
        "seatlocation": "1442-05",
        "gender": "m"
    },
    {
        "fullname": "Scott Axworthy",
        "fullname_lc": "scott axworthy",
        "firstName": "scott",
        "lastName": "axworthy",
        "cityName": "new york",
        "department": "Operations",
        "title": "Facilities Coordinator",
        "number": "212-981-7916",
        "seatlocation": "1301-01",
        "gender": "m"
    },
    {
        "fullname": "Nikisha Baboram",
        "fullname_lc": "nikisha baboram",
        "firstName": "nikisha",
        "lastName": "baboram",
        "cityName": "new york",
        "department": "Finance",
        "title": "Senior Budget Coordinator",
        "number": "212-981-7840",
        "seatlocation": "1312-48",
        "gender": "f"
    },
    {
        "fullname": "Nikki Balekjian",
        "fullname_lc": "nikki balekjian",
        "firstName": "nikki",
        "lastName": "balekjian",
        "cityName": "new york",
        "department": "Integrated Business Affairs",
        "title": "Integrated Business Affairs Manager",
        "number": "212-981-7894",
        "seatlocation": "1322-30",
        "gender": "f"
    },
    {
        "fullname": "Kate Bauer",
        "fullname_lc": "kate bauer",
        "firstName": "kate",
        "lastName": "bauer",
        "cityName": "new york",
        "department": "Creative",
        "title": "VP, Experience Lead Design",
        "number": "212-981-7830",
        "seatlocation": "1420-66",
        "gender": "f"
    },
    {
        "fullname": "Karen Benson",
        "fullname_lc": "karen benson",
        "firstName": "karen",
        "lastName": "benson",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "EVP, Director of Integrated Media",
        "number": "212-981-7802",
        "seatlocation": "1307-02",
        "gender": "f"
    },
    {
        "fullname": "Melissa Betancur",
        "fullname_lc": "melissa betancur",
        "firstName": "melissa",
        "lastName": "betancur",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "Print Producer",
        "number": "212-651-8489",
        "seatlocation": "1322-40",
        "gender": "f"
    },
    {
        "fullname": "Adrian Binns",
        "fullname_lc": "adrian binns",
        "firstName": "adrian",
        "lastName": "binns",
        "cityName": "new york",
        "department": "Human Resources",
        "title": "Payroll and Benefits Associate",
        "number": "212-981-7581",
        "seatlocation": "1312-40",
        "gender": "m"
    },
    {
        "fullname": "Jonathan Boffa",
        "fullname_lc": "jonathan boffa",
        "firstName": "jonathan",
        "lastName": "boffa",
        "cityName": "new york",
        "department": "Creative",
        "title": "Designer",
        "number": "212-981-7887",
        "seatlocation": "1420-57",
        "gender": "m"
    },
    {
        "fullname": "Art Boonklan",
        "fullname_lc": "art boonklan",
        "firstName": "art",
        "lastName": "boonklan",
        "cityName": "new york",
        "department": "Creative",
        "title": "Associate Creative Director",
        "number": "212-981-7524",
        "seatlocation": "1415-10",
        "gender": "m"
    },
    {
        "fullname": "Siobhan Brooker",
        "fullname_lc": "siobhan brooker",
        "firstName": "siobhan",
        "lastName": "brooker",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "Assistant Media Planner",
        "number": "212-981-8047",
        "seatlocation": "1312-10",
        "gender": "f"
    },
    {
        "fullname": "Lauren Brooks",
        "fullname_lc": "lauren brooks",
        "firstName": "lauren",
        "lastName": "brooks",
        "cityName": "new york",
        "department": "Creative",
        "title": "UX Designer",
        "number": "212-981-7885",
        "seatlocation": "1420-63",
        "gender": "f"
    },
    {
        "fullname": "Richard Bryan",
        "fullname_lc": "richard bryan",
        "firstName": "richard",
        "lastName": "bryan",
        "cityName": "new york",
        "department": "Finance",
        "title": "Manager, Client Accounting",
        "number": "212-981-7645",
        "seatlocation": "1309-16",
        "gender": "m"
    },
    {
        "fullname": "Maureen Burzynski",
        "fullname_lc": "maureen burzynski",
        "firstName": "maureen",
        "lastName": "burzynski",
        "cityName": "new york",
        "department": "Media Buying",
        "title": "EVP, Director of Local Buying",
        "number": "212-981-7930",
        "seatlocation": "1307-01",
        "gender": "f"
    },
    {
        "fullname": "Morgan Busch",
        "fullname_lc": "morgan busch",
        "firstName": "morgan",
        "lastName": "busch",
        "cityName": "new york",
        "department": "Media",
        "title": "Paid Search/Social, Assistant",
        "number": "212-981-7893",
        "seatlocation": "1312-27",
        "gender": "f"
    },
    {
        "fullname": "Carla Butwin",
        "fullname_lc": "carla butwin",
        "firstName": "carla",
        "lastName": "butwin",
        "cityName": "new york",
        "department": "Creative",
        "title": "Senior Art Director",
        "number": "212-981-7941",
        "seatlocation": "1415-22|",
        "gender": "f"
    },
    {
        "fullname": "Alexis Bynum",
        "fullname_lc": "alexis bynum",
        "firstName": "alexis",
        "lastName": "bynum",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "Art Buyer",
        "number": "212-981-8032",
        "seatlocation": "1322-25",
        "gender": "f"
    },
    {
        "fullname": "Joe Calabrese",
        "fullname_lc": "joe calabrese",
        "firstName": "joe",
        "lastName": "calabrese",
        "cityName": "new york",
        "department": "Content Production",
        "title": "EVP, Director of Integrated Production",
        "number": "212-981-8007",
        "seatlocation": "1321-02",
        "gender": "m"
    },
    {
        "fullname": "Kerry Callaghan",
        "fullname_lc": "kerry callaghan",
        "firstName": "kerry",
        "lastName": "callaghan",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Supervisor",
        "number": "212-981-7587",
        "seatlocation": "1312-04",
        "gender": "f"
    },
    {
        "fullname": "Lauryn Campbell",
        "fullname_lc": "lauryn campbell",
        "firstName": "lauryn",
        "lastName": "campbell",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-7819",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Katie Casares",
        "fullname_lc": "katie casares",
        "firstName": "katie",
        "lastName": "casares",
        "cityName": "new york",
        "department": "Project Management",
        "title": "Digital Project Manager",
        "number": "212-981-7994",
        "seatlocation": "1420-32",
        "gender": "f"
    },
    {
        "fullname": "Eva Cassetta",
        "fullname_lc": "eva cassetta",
        "firstName": "eva",
        "lastName": "cassetta",
        "cityName": "new york",
        "department": "Studio",
        "title": "Designer",
        "number": "212-981-7684",
        "seatlocation": "1322-44",
        "gender": "f"
    },
    {
        "fullname": "Ashley Centrella",
        "fullname_lc": "ashley centrella",
        "firstName": "ashley",
        "lastName": "centrella",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-7860",
        "seatlocation": "1420-36",
        "gender": "f"
    },
    {
        "fullname": "Barbara Chandler",
        "fullname_lc": "barbara chandler",
        "firstName": "barbara",
        "lastName": "chandler",
        "cityName": "new york",
        "department": "Account Management",
        "title": "EVP, Group Account Director",
        "number": "212-981-7873",
        "seatlocation": "1445-02",
        "gender": "f"
    },
    {
        "fullname": "Sunny Chao",
        "fullname_lc": "sunny chao",
        "firstName": "sunny",
        "lastName": "chao",
        "cityName": "new york",
        "department": "Digital Creative",
        "title": "Creative Developer",
        "number": "212-981-7821",
        "seatlocation": "1420-25",
        "gender": "m"
    },
    {
        "fullname": "Fung Cheung",
        "fullname_lc": "fung cheung",
        "firstName": "fung",
        "lastName": "cheung",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Strategist",
        "number": "212-981-7544",
        "seatlocation": "1420-07",
        "gender": "m"
    },
    {
        "fullname": "Crissy Cicco",
        "fullname_lc": "crissy cicco",
        "firstName": "crissy",
        "lastName": "cicco",
        "cityName": "new york",
        "department": "Content Production",
        "title": "Executive Producer",
        "number": "212-981-7648",
        "seatlocation": "1323-16",
        "gender": "f"
    },
    {
        "fullname": "Johnny Cintron",
        "fullname_lc": "johnny cintron",
        "firstName": "johnny",
        "lastName": "cintron",
        "cityName": "new york",
        "department": "Operations",
        "title": "Handyman/Facilities Coordinator",
        "number": "212-981-8058",
        "seatlocation": "1301-02",
        "gender": "m"
    },
    {
        "fullname": "Christina Collins",
        "fullname_lc": "christina collins",
        "firstName": "christina",
        "lastName": "collins",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "Assistant Media Planner",
        "number": "212-981-7799",
        "seatlocation": "1312-16",
        "gender": "f"
    },
    {
        "fullname": "Cara Colucci",
        "fullname_lc": "cara colucci",
        "firstName": "cara",
        "lastName": "colucci",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Senior Planner",
        "number": "212-981-8056",
        "seatlocation": "1442-01",
        "gender": "f"
    },
    {
        "fullname": "Lisa Conneely",
        "fullname_lc": "lisa conneely",
        "firstName": "lisa",
        "lastName": "conneely",
        "cityName": "new york",
        "department": "Data Strategy",
        "title": "SVP, Director of Data Analytics",
        "number": "212-651-8464",
        "seatlocation": "1415-07",
        "gender": "f"
    },
    {
        "fullname": "Dan Connelly",
        "fullname_lc": "dan connelly",
        "firstName": "dan",
        "lastName": "connelly",
        "cityName": "new york",
        "department": "Studio",
        "title": "Proofreader",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Maggie O. Connors",
        "fullname_lc": "maggie o. connors",
        "firstName": "maggie",
        "lastName": "o. connors",
        "cityName": "new york",
        "department": "Business Development",
        "title": "EVP, Head of Business Development",
        "number": "212-981-7797",
        "seatlocation": "1319-02",
        "gender": "f"
    },
    {
        "fullname": "Dean Coots",
        "fullname_lc": "dean coots",
        "firstName": "dean",
        "lastName": "coots",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-7640",
        "seatlocation": "1420-41",
        "gender": "m"
    },
    {
        "fullname": "James Cowie",
        "fullname_lc": "james cowie",
        "firstName": "james",
        "lastName": "cowie",
        "cityName": "new york",
        "department": "Creative",
        "title": "VP, Creative Director",
        "number": "212-981-7719",
        "seatlocation": "1420-41",
        "gender": "m"
    },
    {
        "fullname": "Andrea Curtin",
        "fullname_lc": "andrea curtin",
        "firstName": "andrea",
        "lastName": "curtin",
        "cityName": "new york",
        "department": "Content Production",
        "title": "Executive Producer",
        "number": "212-981-8083",
        "seatlocation": "1323-17",
        "gender": "f"
    },
    {
        "fullname": "Chris Cutone",
        "fullname_lc": "chris cutone",
        "firstName": "chris",
        "lastName": "cutone",
        "cityName": "new york",
        "department": "Human Resources",
        "title": "EVP, Director of Human Resources",
        "number": "212-981-7796",
        "seatlocation": "1311-02",
        "gender": "m"
    },
    {
        "fullname": "Laura Czerepak",
        "fullname_lc": "laura czerepak",
        "firstName": "laura",
        "lastName": "czerepak",
        "cityName": "new york",
        "department": "Creative",
        "title": "Creative Coordinator",
        "number": "212-981-8023",
        "seatlocation": "1420-47",
        "gender": "f"
    },
    {
        "fullname": "Lindsay D’Ambola",
        "fullname_lc": "lindsay d’ambola",
        "firstName": "lindsay",
        "lastName": "d’ambola",
        "cityName": "new york",
        "department": "Media Buying",
        "title": "Supervisor, National Video",
        "number": "212-981-7773",
        "seatlocation": "1312-22",
        "gender": "f"
    },
    {
        "fullname": "Sadeqwa Davis",
        "fullname_lc": "sadeqwa davis",
        "firstName": "sadeqwa",
        "lastName": "davis",
        "cityName": "new york",
        "department": "Administration",
        "title": "Administrative Assistant",
        "number": "212-981-8002",
        "seatlocation": "1433-55",
        "gender": "f"
    },
    {
        "fullname": "George Decker",
        "fullname_lc": "george decker",
        "firstName": "george",
        "lastName": "decker",
        "cityName": "new york",
        "department": "Creative",
        "title": "EVP, Group Creative Director",
        "number": "212-981-7962",
        "seatlocation": "1415-13",
        "gender": "m"
    },
    {
        "fullname": "Josh Deitel",
        "fullname_lc": "josh deitel",
        "firstName": "josh",
        "lastName": "deitel",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "Executive Digital Producer",
        "number": "212-981-8018",
        "seatlocation": "1322-28",
        "gender": "m"
    },
    {
        "fullname": "Maggie DeLuca",
        "fullname_lc": "maggie deluca",
        "firstName": "maggie",
        "lastName": "deluca",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7586",
        "seatlocation": "1433-08",
        "gender": "f"
    },
    {
        "fullname": "Kristi Diaz",
        "fullname_lc": "kristi diaz",
        "firstName": "kristi",
        "lastName": "diaz",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Director",
        "number": "212-981-7728",
        "seatlocation": "1309-04",
        "gender": "f"
    },
    {
        "fullname": "Suzanne Diegmann",
        "fullname_lc": "suzanne diegmann",
        "firstName": "suzanne",
        "lastName": "diegmann",
        "cityName": "new york",
        "department": "Finance",
        "title": "VP, Finance Director",
        "number": "212-981-7770",
        "seatlocation": "1306-01",
        "gender": "f"
    },
    {
        "fullname": "Val DiFebo",
        "fullname_lc": "val difebo",
        "firstName": "val",
        "lastName": "difebo",
        "cityName": "new york",
        "department": "Executive New York",
        "title": "CEO, Deutsch Inc",
        "number": "212-981-7671",
        "seatlocation": "1439",
        "gender": "f"
    },
    {
        "fullname": "Caitlin Dilks",
        "fullname_lc": "caitlin dilks",
        "firstName": "caitlin",
        "lastName": "dilks",
        "cityName": "new york",
        "department": "Media",
        "title": "Digital Media Supervisor",
        "number": "212-981-7735",
        "seatlocation": "1433-43",
        "gender": "f"
    },
    {
        "fullname": "Julianne Dinsmore",
        "fullname_lc": "julianne dinsmore",
        "firstName": "julianne",
        "lastName": "dinsmore",
        "cityName": "new york",
        "department": "Media Buying",
        "title": "Assistant Media Buyer",
        "number": "212-981-7915",
        "seatlocation": "1312-18",
        "gender": "f"
    },
    {
        "fullname": "Emily Doll",
        "fullname_lc": "emily doll",
        "firstName": "emily",
        "lastName": "doll",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Supervisor",
        "number": "212-981-7652",
        "seatlocation": "1312-12",
        "gender": "f"
    },
    {
        "fullname": "Michelle Douglas",
        "fullname_lc": "michelle douglas",
        "firstName": "michelle",
        "lastName": "douglas",
        "cityName": "new york",
        "department": "Finance",
        "title": "Financial Analyst",
        "number": "212-651-8411",
        "seatlocation": "1312-38",
        "gender": "f"
    },
    {
        "fullname": "Dawn Doumeng",
        "fullname_lc": "dawn doumeng",
        "firstName": "dawn",
        "lastName": "doumeng",
        "cityName": "new york",
        "department": "Integrated Business Affairs",
        "title": "Senior Business Manager",
        "number": "212-981-7832",
        "seatlocation": "1323-10",
        "gender": "f"
    },
    {
        "fullname": "Estela Duce",
        "fullname_lc": "estela duce",
        "firstName": "estela",
        "lastName": "duce",
        "cityName": "new york",
        "department": "Content Production",
        "title": "Producer",
        "number": "212-981-8107",
        "seatlocation": "1323-12",
        "gender": "f"
    },
    {
        "fullname": "Joanna Durkalec",
        "fullname_lc": "joanna durkalec",
        "firstName": "joanna",
        "lastName": "durkalec",
        "cityName": "new york",
        "department": "Creative",
        "title": "Senior Designer",
        "number": "212-981-8093",
        "seatlocation": "1420-59",
        "gender": "f"
    },
    {
        "fullname": "Sam Eisen",
        "fullname_lc": "sam eisen",
        "firstName": "sam",
        "lastName": "eisen",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-8071",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Paul Elicker",
        "fullname_lc": "paul elicker",
        "firstName": "paul",
        "lastName": "elicker",
        "cityName": "new york",
        "department": "Creative",
        "title": "Senior Copywriter",
        "number": "212-981-7721",
        "seatlocation": "1415-21",
        "gender": "m"
    },
    {
        "fullname": "Kristen Eng",
        "fullname_lc": "kristen eng",
        "firstName": "kristen",
        "lastName": "eng",
        "cityName": "new york",
        "department": "Studio",
        "title": "Studio Designer",
        "number": "212-651-8469",
        "seatlocation": "1322-49",
        "gender": "f"
    },
    {
        "fullname": "Heather English",
        "fullname_lc": "heather english",
        "firstName": "heather",
        "lastName": "english",
        "cityName": "new york",
        "department": "Creative",
        "title": "VP, Creative Director",
        "number": "212-981-7911",
        "seatlocation": "1415-19",
        "gender": "f"
    },
    {
        "fullname": "Tom Entrup",
        "fullname_lc": "tom entrup",
        "firstName": "tom",
        "lastName": "entrup",
        "cityName": "new york",
        "department": "Finance",
        "title": "Partner, CFO",
        "number": "212-981-8097",
        "seatlocation": "1310-01",
        "gender": "m"
    },
    {
        "fullname": "Andrea Estrada",
        "fullname_lc": "andrea estrada",
        "firstName": "andrea",
        "lastName": "estrada",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7810",
        "seatlocation": "1433-14",
        "gender": "f"
    },
    {
        "fullname": "Dana Fahey",
        "fullname_lc": "dana fahey",
        "firstName": "dana",
        "lastName": "fahey",
        "cityName": "new york",
        "department": "Creative",
        "title": "Recruiter",
        "number": "",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Maged Faltas",
        "fullname_lc": "maged faltas",
        "firstName": "maged",
        "lastName": "faltas",
        "cityName": "new york",
        "department": "Finance",
        "title": "Senior Financial Analyst",
        "number": "212-981-7659",
        "seatlocation": "1312-46",
        "gender": "m"
    },
    {
        "fullname": "Theresa Farina",
        "fullname_lc": "theresa farina",
        "firstName": "theresa",
        "lastName": "farina",
        "cityName": "new york",
        "department": "Operations",
        "title": "VP, Director of Operations",
        "number": "212-981-7789",
        "seatlocation": "1301-09",
        "gender": "f"
    },
    {
        "fullname": "Amy Finucane",
        "fullname_lc": "amy finucane",
        "firstName": "amy",
        "lastName": "finucane",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "Proofreader",
        "number": "212-981-8087",
        "seatlocation": "1322-38",
        "gender": "f"
    },
    {
        "fullname": "Kevin Foley",
        "fullname_lc": "kevin foley",
        "firstName": "kevin",
        "lastName": "foley",
        "cityName": "new york",
        "department": "Finance",
        "title": "Senior Accountant",
        "number": "212-981-7945",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Angel Fonseca",
        "fullname_lc": "angel fonseca",
        "firstName": "angel",
        "lastName": "fonseca",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-7886",
        "seatlocation": "1433-17",
        "gender": "f"
    },
    {
        "fullname": "Aviva Friedman",
        "fullname_lc": "aviva friedman",
        "firstName": "aviva",
        "lastName": "friedman",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7742",
        "seatlocation": "1433-29",
        "gender": "f"
    },
    {
        "fullname": "Marques Gartrell",
        "fullname_lc": "marques gartrell",
        "firstName": "marques",
        "lastName": "gartrell",
        "cityName": "new york",
        "department": "Creative",
        "title": "VP, Creative Director",
        "number": "212-981-7925",
        "seatlocation": "1415-20",
        "gender": "m"
    },
    {
        "fullname": "Troy Gary",
        "fullname_lc": "troy gary",
        "firstName": "troy",
        "lastName": "gary",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Digital Strategist",
        "number": "212-981-7724",
        "seatlocation": "1420-03",
        "gender": "m"
    },
    {
        "fullname": "Lauren Geisler",
        "fullname_lc": "lauren geisler",
        "firstName": "lauren",
        "lastName": "geisler",
        "cityName": "new york",
        "department": "Creative",
        "title": "Senior Art Director",
        "number": "212-981-7582",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Matthew George",
        "fullname_lc": "matthew george",
        "firstName": "matthew",
        "lastName": "george",
        "cityName": "new york",
        "department": "Data Strategy",
        "title": "EVP, Director of Communications Planning",
        "number": "212-981-7814",
        "seatlocation": "1415-09",
        "gender": "m"
    },
    {
        "fullname": "Anthony Giustino",
        "fullname_lc": "anthony giustino",
        "firstName": "anthony",
        "lastName": "giustino",
        "cityName": "new york",
        "department": "Finance",
        "title": "Financial Analyst: Compensation & Resource Management",
        "number": "212-981-8106",
        "seatlocation": "1312-29",
        "gender": "m"
    },
    {
        "fullname": "Hector Gomez",
        "fullname_lc": "hector gomez",
        "firstName": "hector",
        "lastName": "gomez",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "Technical Support Specialist",
        "number": "212-651-8425",
        "seatlocation": "131T-04",
        "gender": "m"
    },
    {
        "fullname": "Reyes Gonzalez",
        "fullname_lc": "reyes gonzalez",
        "firstName": "reyes",
        "lastName": "gonzalez",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "Technical Support Specialist",
        "number": "212-651-8404",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Jeff Good",
        "fullname_lc": "jeff good",
        "firstName": "jeff",
        "lastName": "good",
        "cityName": "new york",
        "department": "Creative",
        "title": "Associate Creative Director",
        "number": "212-981-7933",
        "seatlocation": "1415-09",
        "gender": "m"
    },
    {
        "fullname": "Christopher Gorka",
        "fullname_lc": "christopher gorka",
        "firstName": "christopher",
        "lastName": "gorka",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "Architect, BI & Software",
        "number": "212-981-7688",
        "seatlocation": "1323-02",
        "gender": "m"
    },
    {
        "fullname": "Nicole Grabel",
        "fullname_lc": "nicole grabel",
        "firstName": "nicole",
        "lastName": "grabel",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Senior Strategist",
        "number": "212-981-7961",
        "seatlocation": "1312-02",
        "gender": "f"
    },
    {
        "fullname": "Dhobie Gracia",
        "fullname_lc": "dhobie gracia",
        "firstName": "dhobie",
        "lastName": "gracia",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7610",
        "seatlocation": "1433-15",
        "gender": "f"
    },
    {
        "fullname": "Erica Grau",
        "fullname_lc": "erica grau",
        "firstName": "erica",
        "lastName": "grau",
        "cityName": "new york",
        "department": "Executive New York",
        "title": "Partner, Chief Operating Officer",
        "number": "212-981-8091",
        "seatlocation": "1444-01",
        "gender": "f"
    },
    {
        "fullname": "Chris Green",
        "fullname_lc": "chris green",
        "firstName": "chris",
        "lastName": "green",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Senior Planner",
        "number": "212-981-7935",
        "seatlocation": "1415-05",
        "gender": "m"
    },
    {
        "fullname": "David Green",
        "fullname_lc": "david green",
        "firstName": "david",
        "lastName": "green",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Account Planner",
        "number": "212-981-7985",
        "seatlocation": "1433-18",
        "gender": "m"
    },
    {
        "fullname": "Cheryl Greene",
        "fullname_lc": "cheryl greene",
        "firstName": "cheryl",
        "lastName": "greene",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Strategy Consultant",
        "number": "212-981-8027",
        "seatlocation": 1417,
        "gender": "f"
    },
    {
        "fullname": "Marea Grossman",
        "fullname_lc": "marea grossman",
        "firstName": "marea",
        "lastName": "grossman",
        "cityName": "new york",
        "department": "Project Management",
        "title": "VP, Associate Director, Project Management",
        "number": "212-981-7756",
        "seatlocation": "1433-27",
        "gender": "f"
    },
    {
        "fullname": "Jon Gruber",
        "fullname_lc": "jon gruber",
        "firstName": "jon",
        "lastName": "gruber",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-7953",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Rachel Gruber",
        "fullname_lc": "rachel gruber",
        "firstName": "rachel",
        "lastName": "gruber",
        "cityName": "new york",
        "department": "Social and Community",
        "title": "Senior Strategist, Digital",
        "number": "212-981-8046",
        "seatlocation": "1420-08",
        "gender": "f"
    },
    {
        "fullname": "Eric Grush",
        "fullname_lc": "eric grush",
        "firstName": "eric",
        "lastName": "grush",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "VP, Senior Editor",
        "number": "212-981-7848",
        "seatlocation": "1330-01",
        "gender": "m"
    },
    {
        "fullname": "Denise Guillet",
        "fullname_lc": "denise guillet",
        "firstName": "denise",
        "lastName": "guillet",
        "cityName": "new york",
        "department": "Account Management",
        "title": "SVP, Group Account Director",
        "number": "212-981-7804",
        "seatlocation": "1325-02",
        "gender": "f"
    },
    {
        "fullname": "Juan Guzman",
        "fullname_lc": "juan guzman",
        "firstName": "juan",
        "lastName": "guzman",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Senior Motion Designer/Editor",
        "number": "212-981-7984",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Jun Ha",
        "fullname_lc": "jun ha",
        "firstName": "jun",
        "lastName": "ha",
        "cityName": "new york",
        "department": "Media",
        "title": "Assistant Media Planner",
        "number": "212-981-7559",
        "seatlocation": "1433-46",
        "gender": "m"
    },
    {
        "fullname": "Charles Hailey",
        "fullname_lc": "charles hailey",
        "firstName": "charles",
        "lastName": "hailey",
        "cityName": "new york",
        "department": "Digital Creative",
        "title": "Quality Assurance Engineer",
        "number": "212-981-8078",
        "seatlocation": "1420-10",
        "gender": "m"
    },
    {
        "fullname": "John Haley",
        "fullname_lc": "john haley",
        "firstName": "john",
        "lastName": "haley",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "animator",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Alyson Hasenstab",
        "fullname_lc": "alyson hasenstab",
        "firstName": "alyson",
        "lastName": "hasenstab",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "Assistant Media Planner",
        "number": "212-981-7709",
        "seatlocation": "1312-16",
        "gender": "f"
    },
    {
        "fullname": "John Hatheway",
        "fullname_lc": "john hatheway",
        "firstName": "john",
        "lastName": "hatheway",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "Digital Producer",
        "number": "212-981-7888",
        "seatlocation": "1322-27",
        "gender": "m"
    },
    {
        "fullname": "Ayana Hazeley",
        "fullname_lc": "ayana hazeley",
        "firstName": "ayana",
        "lastName": "hazeley",
        "cityName": "new york",
        "department": "Administration",
        "title": "Executive Assistant",
        "number": "",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Kelsey Heard",
        "fullname_lc": "kelsey heard",
        "firstName": "kelsey",
        "lastName": "heard",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-7913",
        "seatlocation": "1420-48",
        "gender": "f"
    },
    {
        "fullname": "Ashley Heisner",
        "fullname_lc": "ashley heisner",
        "firstName": "ashley",
        "lastName": "heisner",
        "cityName": "new york",
        "department": "Project Management",
        "title": "Project Manager",
        "number": "212-981-8088",
        "seatlocation": "1420-39",
        "gender": "f"
    },
    {
        "fullname": "Tyler Helms",
        "fullname_lc": "tyler helms",
        "firstName": "tyler",
        "lastName": "helms",
        "cityName": "new york",
        "department": "Account Management",
        "title": "EVP, Group Account Director",
        "number": "212-981-7712",
        "seatlocation": "1446-02",
        "gender": "m"
    },
    {
        "fullname": "Zackary Herpy",
        "fullname_lc": "zackary herpy",
        "firstName": "zackary",
        "lastName": "herpy",
        "cityName": "new york",
        "department": "Project Management",
        "title": "Project Manager",
        "number": "212-981-7856",
        "seatlocation": "1420-52",
        "gender": "m"
    },
    {
        "fullname": "Mindy Hoblack",
        "fullname_lc": "mindy hoblack",
        "firstName": "mindy",
        "lastName": "hoblack",
        "cityName": "new york",
        "department": "Creative",
        "title": "Senior Copywriter",
        "number": "212-981-7967",
        "seatlocation": "1415-12",
        "gender": "f"
    },
    {
        "fullname": "Rebecca Hoffman",
        "fullname_lc": "rebecca hoffman",
        "firstName": "rebecca",
        "lastName": "hoffman",
        "cityName": "new york",
        "department": "Human Resources",
        "title": "Human Resources Coordinator",
        "number": "212-981-8111",
        "seatlocation": "1312*50",
        "gender": "f"
    },
    {
        "fullname": "Michael Huberman",
        "fullname_lc": "michael huberman",
        "firstName": "michael",
        "lastName": "huberman",
        "cityName": "new york",
        "department": "Media",
        "title": "Media Research Analyst",
        "number": "212-981-7816",
        "seatlocation": "1312-25",
        "gender": "m"
    },
    {
        "fullname": "Lauren Hurwitz",
        "fullname_lc": "lauren hurwitz",
        "firstName": "lauren",
        "lastName": "hurwitz",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "Senior Digital Producer",
        "number": "212-981-8039",
        "seatlocation": "1323-14",
        "gender": "f"
    },
    {
        "fullname": "Destiny Jackson",
        "fullname_lc": "destiny jackson",
        "firstName": "destiny",
        "lastName": "jackson",
        "cityName": "new york",
        "department": "Operations",
        "title": "Receptionist",
        "number": "212-981-8070",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Payal Jambusaria",
        "fullname_lc": "payal jambusaria",
        "firstName": "payal",
        "lastName": "jambusaria",
        "cityName": "new york",
        "department": "Digital Creative",
        "title": "Software Engineer",
        "number": "212-981-7554",
        "seatlocation": "1420-17",
        "gender": "f"
    },
    {
        "fullname": "Taylor Jerome",
        "fullname_lc": "taylor jerome",
        "firstName": "taylor",
        "lastName": "jerome",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-8025",
        "seatlocation": "1433-35",
        "gender": "f"
    },
    {
        "fullname": "Danielle Johnsen-Karr",
        "fullname_lc": "danielle johnsen-karr",
        "firstName": "danielle",
        "lastName": "johnsen-karr",
        "cityName": "new york",
        "department": "Social and Community",
        "title": "Social Strategy & Editorial Director",
        "number": "212-981-7977",
        "seatlocation": "1442-12",
        "gender": "f"
    },
    {
        "fullname": "Gregory Johnson",
        "fullname_lc": "gregory johnson",
        "firstName": "gregory",
        "lastName": "johnson",
        "cityName": "new york",
        "department": "Studio",
        "title": "QA Engineer",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Pete Johnson",
        "fullname_lc": "pete johnson",
        "firstName": "pete",
        "lastName": "johnson",
        "cityName": "new york",
        "department": "Creative",
        "title": "EVP, Executive Creative Director",
        "number": "212-981-7747",
        "seatlocation": "1412-02",
        "gender": "m"
    },
    {
        "fullname": "Daniel Jones",
        "fullname_lc": "daniel jones",
        "firstName": "daniel",
        "lastName": "jones",
        "cityName": "new york",
        "department": "Media",
        "title": "Senior Media Planner",
        "number": "212-981-7845",
        "seatlocation": "1433-42",
        "gender": "m"
    },
    {
        "fullname": "Derrick Joseph",
        "fullname_lc": "derrick joseph",
        "firstName": "derrick",
        "lastName": "joseph",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "AV Biller/Business Manager",
        "number": "212-981-7723",
        "seatlocation": "1322-21",
        "gender": "m"
    },
    {
        "fullname": "Julia Karlson",
        "fullname_lc": "julia karlson",
        "firstName": "julia",
        "lastName": "karlson",
        "cityName": "new york",
        "department": "Finance",
        "title": "VP, Director Client Accounting",
        "number": "212-981-7918",
        "seatlocation": "1309-11",
        "gender": "f"
    },
    {
        "fullname": "Krish Karunanidhi",
        "fullname_lc": "krish karunanidhi",
        "firstName": "krish",
        "lastName": "karunanidhi",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-8084",
        "seatlocation": "1415-14",
        "gender": "m"
    },
    {
        "fullname": "Dan Kelleher",
        "fullname_lc": "dan kelleher",
        "firstName": "dan",
        "lastName": "kelleher",
        "cityName": "new york",
        "department": "Creative",
        "title": "Partner, Chief Creative Officer",
        "number": "212-981-7764",
        "seatlocation": 1418,
        "gender": "m"
    },
    {
        "fullname": "Danielle Kellner",
        "fullname_lc": "danielle kellner",
        "firstName": "danielle",
        "lastName": "kellner",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-8102",
        "seatlocation": "1312-14",
        "gender": "f"
    },
    {
        "fullname": "Clara Kim",
        "fullname_lc": "clara kim",
        "firstName": "clara",
        "lastName": "kim",
        "cityName": "new york",
        "department": "Project Management",
        "title": "VP, Director Project Management",
        "number": "212-981-7980",
        "seatlocation": "1420-46",
        "gender": "f"
    },
    {
        "fullname": "Hyobee Kim",
        "fullname_lc": "hyobee kim",
        "firstName": "hyobee",
        "lastName": "kim",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-7644",
        "seatlocation": "1420-31",
        "gender": "f"
    },
    {
        "fullname": "Stephanie Kirnon",
        "fullname_lc": "stephanie kirnon",
        "firstName": "stephanie",
        "lastName": "kirnon",
        "cityName": "new york",
        "department": "Operations",
        "title": "Operations Coordinator",
        "number": "212-981-7912",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Jeff Knapp",
        "fullname_lc": "jeff knapp",
        "firstName": "jeff",
        "lastName": "knapp",
        "cityName": "new york",
        "department": "Studio",
        "title": "Proofreader",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Richard Kolopeaua",
        "fullname_lc": "richard kolopeaua",
        "firstName": "richard",
        "lastName": "kolopeaua",
        "cityName": "new york",
        "department": "Creative",
        "title": "VP, Creative Director",
        "number": "212-981-7746",
        "seatlocation": "1420-42",
        "gender": "m"
    },
    {
        "fullname": "Jeff Kopay",
        "fullname_lc": "jeff kopay",
        "firstName": "jeff",
        "lastName": "kopay",
        "cityName": "new york",
        "department": "Creative",
        "title": "Creative Director",
        "number": "212-981-8086",
        "seatlocation": "1420-44",
        "gender": "m"
    },
    {
        "fullname": "Isabella Kosal",
        "fullname_lc": "isabella kosal",
        "firstName": "isabella",
        "lastName": "kosal",
        "cityName": "new york",
        "department": "Media",
        "title": "Assistant Media Planner",
        "number": "212-981-7558",
        "seatlocation": "1433-47",
        "gender": "f"
    },
    {
        "fullname": "Lindsay Kramer",
        "fullname_lc": "lindsay kramer",
        "firstName": "lindsay",
        "lastName": "kramer",
        "cityName": "new york",
        "department": "Business Development",
        "title": "Supervisor, Busines Development",
        "number": "212-981-7997",
        "seatlocation": "1442-11",
        "gender": "f"
    },
    {
        "fullname": "Julie Kravetz",
        "fullname_lc": "julie kravetz",
        "firstName": "julie",
        "lastName": "kravetz",
        "cityName": "new york",
        "department": "Strategy",
        "title": "SVP, Group Planning Director",
        "number": "212-98-7901",
        "seatlocation": "1447-01",
        "gender": "f"
    },
    {
        "fullname": "Jake Kuhnle",
        "fullname_lc": "jake kuhnle",
        "firstName": "jake",
        "lastName": "kuhnle",
        "cityName": "new york",
        "department": "Finance",
        "title": "Timesheet Coordinator",
        "number": "212-981-7982",
        "seatlocation": "1312-51",
        "gender": "m"
    },
    {
        "fullname": "Amanda Lamoureux",
        "fullname_lc": "amanda lamoureux",
        "firstName": "amanda",
        "lastName": "lamoureux",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Director",
        "number": "212-981-7744",
        "seatlocation": "1442-09",
        "gender": "f"
    },
    {
        "fullname": "Chiyeung Lau",
        "fullname_lc": "chiyeung lau",
        "firstName": "chiyeung",
        "lastName": "lau",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-7874",
        "seatlocation": "1420-37",
        "gender": "m"
    },
    {
        "fullname": "April Lauderdale",
        "fullname_lc": "april lauderdale",
        "firstName": "april",
        "lastName": "lauderdale",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-7917",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Justin Lee",
        "fullname_lc": "justin lee",
        "firstName": "justin",
        "lastName": "lee",
        "cityName": "new york",
        "department": "Creative",
        "title": "Digital Copywriter",
        "number": "212-981-8059",
        "seatlocation": "1415-13",
        "gender": "m"
    },
    {
        "fullname": "Sang Lee",
        "fullname_lc": "sang lee",
        "firstName": "sang",
        "lastName": "lee",
        "cityName": "new york",
        "department": "Creative",
        "title": "Digital Designer",
        "number": "212-981-7795",
        "seatlocation": "1420-65",
        "gender": "m"
    },
    {
        "fullname": "Gab Lentini",
        "fullname_lc": "gab lentini",
        "firstName": "gab",
        "lastName": "lentini",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-8103",
        "seatlocation": "1433-16",
        "gender": "f"
    },
    {
        "fullname": "Vonda LePage",
        "fullname_lc": "vonda lepage",
        "firstName": "vonda",
        "lastName": "lepage",
        "cityName": "new york",
        "department": "Corporate Communications",
        "title": "EVP, Director of Corp Comm",
        "number": "212-981-7680",
        "seatlocation": "1413-01",
        "gender": "f"
    },
    {
        "fullname": "Jiaqi Li",
        "fullname_lc": "jiaqi li",
        "firstName": "jiaqi",
        "lastName": "li",
        "cityName": "new york",
        "department": "Data Strategy",
        "title": "VP, Data Strategist",
        "number": "212-981-7750",
        "seatlocation": "1442-13",
        "gender": "m"
    },
    {
        "fullname": "Kristen Little",
        "fullname_lc": "kristen little",
        "firstName": "kristen",
        "lastName": "little",
        "cityName": "new york",
        "department": "Media Buying",
        "title": "Local Buyer",
        "number": "212-981-7634",
        "seatlocation": "1312-30",
        "gender": "f"
    },
    {
        "fullname": "Leslie Long",
        "fullname_lc": "leslie long",
        "firstName": "leslie",
        "lastName": "long",
        "cityName": "new york",
        "department": "Human Resources",
        "title": "Recruiter",
        "number": "212-981-7562",
        "seatlocation": "1311-01",
        "gender": "f"
    },
    {
        "fullname": "Gabriella Loutfi",
        "fullname_lc": "gabriella loutfi",
        "firstName": "gabriella",
        "lastName": "loutfi",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Editor",
        "number": "",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "John Lucas",
        "fullname_lc": "john lucas",
        "firstName": "john",
        "lastName": "lucas",
        "cityName": "new york",
        "department": "Studio",
        "title": "Proofreader",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Jeanette Luis",
        "fullname_lc": "jeanette luis",
        "firstName": "jeanette",
        "lastName": "luis",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "Executive Print Producer",
        "number": "212-981-7657",
        "seatlocation": "1323-20",
        "gender": "f"
    },
    {
        "fullname": "Derek Magesis",
        "fullname_lc": "derek magesis",
        "firstName": "derek",
        "lastName": "magesis",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Director",
        "number": "212-981-8072",
        "seatlocation": "1442-08",
        "gender": "m"
    },
    {
        "fullname": "Jess Manganelli",
        "fullname_lc": "jess manganelli",
        "firstName": "jess",
        "lastName": "manganelli",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Director",
        "number": "212-981-7711",
        "seatlocation": "1433-08",
        "gender": "f"
    },
    {
        "fullname": "Halley Mangano",
        "fullname_lc": "halley mangano",
        "firstName": "halley",
        "lastName": "mangano",
        "cityName": "new york",
        "department": "Content Production",
        "title": "Assistant Producer",
        "number": "212-981-8028",
        "seatlocation": "1322-33",
        "gender": "f"
    },
    {
        "fullname": "Sarah Manna",
        "fullname_lc": "sarah manna",
        "firstName": "sarah",
        "lastName": "manna",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "SVP, Director of Print and Art Production",
        "number": "212-981-8092",
        "seatlocation": "1323-21",
        "gender": "f"
    },
    {
        "fullname": "Miles Marden",
        "fullname_lc": "miles marden",
        "firstName": "miles",
        "lastName": "marden",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7954",
        "seatlocation": "1312-14",
        "gender": "m"
    },
    {
        "fullname": "Helena Marklin",
        "fullname_lc": "helena marklin",
        "firstName": "helena",
        "lastName": "marklin",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-8040",
        "seatlocation": "1433-31",
        "gender": "f"
    },
    {
        "fullname": "Christina Martinez",
        "fullname_lc": "christina martinez",
        "firstName": "christina",
        "lastName": "martinez",
        "cityName": "new york",
        "department": "Finance",
        "title": "Jr Staff Accountant",
        "number": "212-651-8484",
        "seatlocation": "1312-55",
        "gender": "f"
    },
    {
        "fullname": "Evelyn Martinez",
        "fullname_lc": "evelyn martinez",
        "firstName": "evelyn",
        "lastName": "martinez",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "Telecomm Manager",
        "number": "212-981-8110",
        "seatlocation": "1323-03",
        "gender": "f"
    },
    {
        "fullname": "Jimmy Martinoski",
        "fullname_lc": "jimmy martinoski",
        "firstName": "jimmy",
        "lastName": "martinoski",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "Senior System Administrator",
        "number": "212-981-7785",
        "seatlocation": "131T-01",
        "gender": "m"
    },
    {
        "fullname": "Stephanie Matusewicz",
        "fullname_lc": "stephanie matusewicz",
        "firstName": "stephanie",
        "lastName": "matusewicz",
        "cityName": "new york",
        "department": "Studio",
        "title": "Studio Artist",
        "number": "212-981-7861",
        "seatlocation": "1322-52",
        "gender": "f"
    },
    {
        "fullname": "Jayme Maultasch",
        "fullname_lc": "jayme maultasch",
        "firstName": "jayme",
        "lastName": "maultasch",
        "cityName": "new york",
        "department": "Account Management",
        "title": "EVP, Group Account Director",
        "number": "212-981-7927",
        "seatlocation": "1445-01",
        "gender": "m"
    },
    {
        "fullname": "Alice Mazorra",
        "fullname_lc": "alice mazorra",
        "firstName": "alice",
        "lastName": "mazorra",
        "cityName": "new york",
        "department": "Studio",
        "title": "Senior Retoucher",
        "number": "212-981-7974",
        "seatlocation": "1316-01",
        "gender": "f"
    },
    {
        "fullname": "Tripp McCune",
        "fullname_lc": "tripp mccune",
        "firstName": "tripp",
        "lastName": "mccune",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "EVP, Chief Information Officer",
        "number": "212-981-7766",
        "seatlocation": "|1324-02",
        "gender": "m"
    },
    {
        "fullname": "Rachel McEuen",
        "fullname_lc": "rachel mceuen",
        "firstName": "rachel",
        "lastName": "mceuen",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-7839",
        "seatlocation": "1420-42",
        "gender": "f"
    },
    {
        "fullname": "Natalie McKaig",
        "fullname_lc": "natalie mckaig",
        "firstName": "natalie",
        "lastName": "mckaig",
        "cityName": "new york",
        "department": "Administration",
        "title": "Administrative Assistant",
        "number": "212-981-7574",
        "seatlocation": "1433-54",
        "gender": "f"
    },
    {
        "fullname": "Madalyn McLane",
        "fullname_lc": "madalyn mclane",
        "firstName": "madalyn",
        "lastName": "mclane",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Supervisor",
        "number": "212-981-7987",
        "seatlocation": "1312-11",
        "gender": "f"
    },
    {
        "fullname": "Brian McManus",
        "fullname_lc": "brian mcmanus",
        "firstName": "brian",
        "lastName": "mcmanus",
        "cityName": "new york",
        "department": "Finance",
        "title": "SVP, Contoller",
        "number": "212-981-7557",
        "seatlocation": "1306-02",
        "gender": "m"
    },
    {
        "fullname": "Rondell Meeks",
        "fullname_lc": "rondell meeks",
        "firstName": "rondell",
        "lastName": "meeks",
        "cityName": "new york",
        "department": "Studio",
        "title": "VP, Studio Services",
        "number": "212-981-7881",
        "seatlocation": "1320-01",
        "gender": "m"
    },
    {
        "fullname": "Rachel Mercer",
        "fullname_lc": "rachel mercer",
        "firstName": "rachel",
        "lastName": "mercer",
        "cityName": "new york",
        "department": "Strategy",
        "title": "SVP, Head of Digital Strategy and Invention",
        "number": "212-981-7553",
        "seatlocation": "1415-02",
        "gender": "f"
    },
    {
        "fullname": "Erin Metcalf",
        "fullname_lc": "erin metcalf",
        "firstName": "erin",
        "lastName": "metcalf",
        "cityName": "new york",
        "department": "Account Management",
        "title": "VP, Account Director",
        "number": "212-981-8044",
        "seatlocation": "1309-06",
        "gender": "f"
    },
    {
        "fullname": "Alex Miller",
        "fullname_lc": "alex miller",
        "firstName": "alex",
        "lastName": "miller",
        "cityName": "new york",
        "department": "Creative",
        "title": "Senior Interactive Designer",
        "number": "212-981-7683",
        "seatlocation": "1420-58",
        "gender": "m"
    },
    {
        "fullname": "Andrew Mixter",
        "fullname_lc": "andrew mixter",
        "firstName": "andrew",
        "lastName": "mixter",
        "cityName": "new york",
        "department": "Creative",
        "title": "Art Director",
        "number": "212-981-7561",
        "seatlocation": "1420-34",
        "gender": "m"
    },
    {
        "fullname": "Kristin Mommers",
        "fullname_lc": "kristin mommers",
        "firstName": "kristin",
        "lastName": "mommers",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Senior Account Planner",
        "number": "212-981-7899",
        "seatlocation": "1415-01",
        "gender": "f"
    },
    {
        "fullname": "Katherine Moncrief",
        "fullname_lc": "katherine moncrief",
        "firstName": "katherine",
        "lastName": "moncrief",
        "cityName": "new york",
        "department": "Creative",
        "title": "EVP, Director of Talent",
        "number": "212-981-7575",
        "seatlocation": "1412-01",
        "gender": "f"
    },
    {
        "fullname": "Jeffrey Morgan",
        "fullname_lc": "jeffrey morgan",
        "firstName": "jeffrey",
        "lastName": "morgan",
        "cityName": "new york",
        "department": "Content Production",
        "title": "EP Steelhead",
        "number": "212-981-7992",
        "seatlocation": "1323-15",
        "gender": "m"
    },
    {
        "fullname": "Susan Mozdierz",
        "fullname_lc": "susan mozdierz",
        "firstName": "susan",
        "lastName": "mozdierz",
        "cityName": "new york",
        "department": "Finance",
        "title": "VP, Asst. Dir. Of Client Accounting",
        "number": "212-981-7782",
        "seatlocation": "1309-15",
        "gender": "f"
    },
    {
        "fullname": "Mina Mukherjee",
        "fullname_lc": "mina mukherjee",
        "firstName": "mina",
        "lastName": "mukherjee",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-7788",
        "seatlocation": "1312-01",
        "gender": "f"
    },
    {
        "fullname": "Shreya Mukherjee",
        "fullname_lc": "shreya mukherjee",
        "firstName": "shreya",
        "lastName": "mukherjee",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Social Impact Practice Lead/SVP Group Planning Director",
        "number": "212-981-7588",
        "seatlocation": "1446-01",
        "gender": "f"
    },
    {
        "fullname": "Matt Mullen",
        "fullname_lc": "matt mullen",
        "firstName": "matt",
        "lastName": "mullen",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Editor",
        "number": "212-981-7827",
        "seatlocation": "1331 ( Edit 3 )",
        "gender": "m"
    },
    {
        "fullname": "Hiroki Murakami",
        "fullname_lc": "hiroki murakami",
        "firstName": "hiroki",
        "lastName": "murakami",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Senior Strategist, Digital",
        "number": "212-981-7757",
        "seatlocation": "1420-04",
        "gender": "m"
    },
    {
        "fullname": "Daniel Murphy",
        "fullname_lc": "daniel murphy",
        "firstName": "daniel",
        "lastName": "murphy",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "SVP, Director of Digital Production",
        "number": "212-981-7817",
        "seatlocation": "1321-01",
        "gender": "m"
    },
    {
        "fullname": "Luis Negron",
        "fullname_lc": "luis negron",
        "firstName": "luis",
        "lastName": "negron",
        "cityName": "new york",
        "department": "Studio",
        "title": "Sr Graphic Artist",
        "number": "212-981-7857",
        "seatlocation": "1322-51",
        "gender": "m"
    },
    {
        "fullname": "Michael Nicosia",
        "fullname_lc": "michael nicosia",
        "firstName": "michael",
        "lastName": "nicosia",
        "cityName": "new york",
        "department": "Digital Creative",
        "title": "Associate Director, Technology",
        "number": "212-981-7628",
        "seatlocation": "1420-07",
        "gender": "m"
    },
    {
        "fullname": "Orlando Nicot",
        "fullname_lc": "orlando nicot",
        "firstName": "orlando",
        "lastName": "nicot",
        "cityName": "new york",
        "department": "Executive New York",
        "title": "Executive Assistant",
        "number": "212-981-7780",
        "seatlocation": "1433-61",
        "gender": "m"
    },
    {
        "fullname": "Erin Nocito",
        "fullname_lc": "erin nocito",
        "firstName": "erin",
        "lastName": "nocito",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "SVP, Group Media Director",
        "number": "212-981-7774",
        "seatlocation": "1442-15",
        "gender": "f"
    },
    {
        "fullname": "Trisha O’Connor",
        "fullname_lc": "trisha o’connor",
        "firstName": "trisha",
        "lastName": "o’connor",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Director",
        "number": "212-981-7754",
        "seatlocation": "1433-07",
        "gender": "f"
    },
    {
        "fullname": "Joey Park",
        "fullname_lc": "joey park",
        "firstName": "joey",
        "lastName": "park",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "animator",
        "number": "",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Jon Parker",
        "fullname_lc": "jon parker",
        "firstName": "jon",
        "lastName": "parker",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-8108",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Able Parris",
        "fullname_lc": "able parris",
        "firstName": "able",
        "lastName": "parris",
        "cityName": "new york",
        "department": "Creative",
        "title": "SVP, Group Creative Director",
        "number": "212-981-8009",
        "seatlocation": "1415-20",
        "gender": "m"
    },
    {
        "fullname": "Dharti Patel",
        "fullname_lc": "dharti patel",
        "firstName": "dharti",
        "lastName": "patel",
        "cityName": "new york",
        "department": "Data Strategy",
        "title": "Data Strategist",
        "number": "212-981-7914",
        "seatlocation": "1433-58",
        "gender": "f"
    },
    {
        "fullname": "Scott Peebles",
        "fullname_lc": "scott peebles",
        "firstName": "scott",
        "lastName": "peebles",
        "cityName": "new york",
        "department": "Studio",
        "title": "Proofreader",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Martha Pena",
        "fullname_lc": "martha pena",
        "firstName": "martha",
        "lastName": "pena",
        "cityName": "new york",
        "department": "Media",
        "title": "Paid Social Manager",
        "number": "212-981-7743",
        "seatlocation": "1312-14",
        "gender": "f"
    },
    {
        "fullname": "Joe Pernice",
        "fullname_lc": "joe pernice",
        "firstName": "joe",
        "lastName": "pernice",
        "cityName": "new york",
        "department": "Content Production",
        "title": "Senior Producer/Content Director",
        "number": "212-271-6003",
        "seatlocation": "1322-26",
        "gender": "m"
    },
    {
        "fullname": "Sean Perrotta",
        "fullname_lc": "sean perrotta",
        "firstName": "sean",
        "lastName": "perrotta",
        "cityName": "new york",
        "department": "Operations",
        "title": "Mailroom Coordinator",
        "number": "212-981-7564",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Chelsea Peterson",
        "fullname_lc": "chelsea peterson",
        "firstName": "chelsea",
        "lastName": "peterson",
        "cityName": "new york",
        "department": "Studio",
        "title": "Retoucher",
        "number": "212-981-8038",
        "seatlocation": "1316-02",
        "gender": "f"
    },
    {
        "fullname": "Lauren Pfahler",
        "fullname_lc": "lauren pfahler",
        "firstName": "lauren",
        "lastName": "pfahler",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "Digital Producer",
        "number": "212-981-7847",
        "seatlocation": "1322-28",
        "gender": "f"
    },
    {
        "fullname": "Danny Pincz",
        "fullname_lc": "danny pincz",
        "firstName": "danny",
        "lastName": "pincz",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Designer",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Oliver Plunkett",
        "fullname_lc": "oliver plunkett",
        "firstName": "oliver",
        "lastName": "plunkett",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "Digital Media Supervisor",
        "number": "212-981-7631",
        "seatlocation": "1433-34",
        "gender": "m"
    },
    {
        "fullname": "Alex Porter",
        "fullname_lc": "alex porter",
        "firstName": "alex",
        "lastName": "porter",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7946",
        "seatlocation": "1433-14",
        "gender": "m"
    },
    {
        "fullname": "Mick Potthast",
        "fullname_lc": "mick potthast",
        "firstName": "mick",
        "lastName": "potthast",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-7759",
        "seatlocation": "1433-24",
        "gender": "m"
    },
    {
        "fullname": "Adriana Poveda",
        "fullname_lc": "adriana poveda",
        "firstName": "adriana",
        "lastName": "poveda",
        "cityName": "new york",
        "department": "Social and Community",
        "title": "Associate Strategist, Digital",
        "number": "212-981-7775",
        "seatlocation": "1420-09",
        "gender": "f"
    },
    {
        "fullname": "Megan Prince",
        "fullname_lc": "megan prince",
        "firstName": "megan",
        "lastName": "prince",
        "cityName": "new york",
        "department": "Account Management",
        "title": "SVP, Account Director",
        "number": "212-981-7981",
        "seatlocation": "1442-03",
        "gender": "f"
    },
    {
        "fullname": "Juliet Pritner",
        "fullname_lc": "juliet pritner",
        "firstName": "juliet",
        "lastName": "pritner",
        "cityName": "new york",
        "department": "Studio",
        "title": "Proofreader",
        "number": "212-981-8019",
        "seatlocation": "1322-38",
        "gender": "f"
    },
    {
        "fullname": "Patricia Quaranta",
        "fullname_lc": "patricia quaranta",
        "firstName": "patricia",
        "lastName": "quaranta",
        "cityName": "new york",
        "department": "Human Resources",
        "title": "VP, Director of Payroll & Benefits",
        "number": "212-981-7701",
        "seatlocation": "1420-27",
        "gender": "f"
    },
    {
        "fullname": "Sarah Rankin",
        "fullname_lc": "sarah rankin",
        "firstName": "sarah",
        "lastName": "rankin",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "SVP, Digital Group Media Director",
        "number": "212-981-8109",
        "seatlocation": "1442-14",
        "gender": "f"
    },
    {
        "fullname": "Linda Raskin",
        "fullname_lc": "linda raskin",
        "firstName": "linda",
        "lastName": "raskin",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "Proofreader",
        "number": "212-651-8496",
        "seatlocation": "1322-36",
        "gender": "f"
    },
    {
        "fullname": "Edgar Rasquinha",
        "fullname_lc": "edgar rasquinha",
        "firstName": "edgar",
        "lastName": "rasquinha",
        "cityName": "new york",
        "department": "Finance",
        "title": "Accounting Manager",
        "number": "212-651-8408",
        "seatlocation": "1309-13",
        "gender": "m"
    },
    {
        "fullname": "Alison Reilly",
        "fullname_lc": "alison reilly",
        "firstName": "alison",
        "lastName": "reilly",
        "cityName": "new york",
        "department": "Creative",
        "title": "Digital Designer",
        "number": "212-981-7865",
        "seatlocation": "1420-55",
        "gender": "f"
    },
    {
        "fullname": "Ally Reis",
        "fullname_lc": "ally reis",
        "firstName": "ally",
        "lastName": "reis",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Executive",
        "number": "212-981-7771",
        "seatlocation": "1312-04",
        "gender": "f"
    },
    {
        "fullname": "Becky Reithmayr",
        "fullname_lc": "becky reithmayr",
        "firstName": "becky",
        "lastName": "reithmayr",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "Executive Digital Producer",
        "number": "212-271-6043",
        "seatlocation": "1322-35",
        "gender": "f"
    },
    {
        "fullname": "Christian Riley",
        "fullname_lc": "christian riley",
        "firstName": "christian",
        "lastName": "riley",
        "cityName": "new york",
        "department": "Operations",
        "title": "Receptionist",
        "number": "212-981-7969",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Kristen Rincavage",
        "fullname_lc": "kristen rincavage",
        "firstName": "kristen",
        "lastName": "rincavage",
        "cityName": "new york",
        "department": "Account Management",
        "title": "SVP, Account Director",
        "number": "212-981-7870",
        "seatlocation": "1442-12",
        "gender": "f"
    },
    {
        "fullname": "Valentina Rosas",
        "fullname_lc": "valentina rosas",
        "firstName": "valentina",
        "lastName": "rosas",
        "cityName": "new york",
        "department": "Finance",
        "title": "Broadcast Biller",
        "number": "212-981-7661",
        "seatlocation": "1312-42",
        "gender": "f"
    },
    {
        "fullname": "April Rosenstock",
        "fullname_lc": "april rosenstock",
        "firstName": "april",
        "lastName": "rosenstock",
        "cityName": "new york",
        "department": "Creative",
        "title": "Digital Designer",
        "number": "212-981-7627",
        "seatlocation": "1420-58",
        "gender": "f"
    },
    {
        "fullname": "Michelle Rowley",
        "fullname_lc": "michelle rowley",
        "firstName": "michelle",
        "lastName": "rowley",
        "cityName": "new york",
        "department": "Strategy",
        "title": "SVP, Group Planning Director",
        "number": "212-981-7784",
        "seatlocation": "1308-01",
        "gender": "f"
    },
    {
        "fullname": "Meg Ryan",
        "fullname_lc": "meg ryan",
        "firstName": "meg",
        "lastName": "ryan",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "Executive Digital Producer",
        "number": "212-981-7786",
        "seatlocation": "1323-21",
        "gender": "f"
    },
    {
        "fullname": "Marieme Sall",
        "fullname_lc": "marieme sall",
        "firstName": "marieme",
        "lastName": "sall",
        "cityName": "new york",
        "department": "Art and Print Prod-NY",
        "title": "Associate Producer",
        "number": "212-981-7952",
        "seatlocation": "1322-32",
        "gender": "f"
    },
    {
        "fullname": "Joanne Scannello",
        "fullname_lc": "joanne scannello",
        "firstName": "joanne",
        "lastName": "scannello",
        "cityName": "new york",
        "department": "Creative",
        "title": "EVP, Group Creative Director",
        "number": "212-981-7738",
        "seatlocation": "1415-15",
        "gender": "f"
    },
    {
        "fullname": "Aaron Schillinger",
        "fullname_lc": "aaron schillinger",
        "firstName": "aaron",
        "lastName": "schillinger",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Editor",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Marlena Schmidt",
        "fullname_lc": "marlena schmidt",
        "firstName": "marlena",
        "lastName": "schmidt",
        "cityName": "new york",
        "department": "Media Buying",
        "title": "VP, Local Buying Director",
        "number": "212-981-8120",
        "seatlocation": "1309-08",
        "gender": "f"
    },
    {
        "fullname": "Laura Schrager",
        "fullname_lc": "laura schrager",
        "firstName": "laura",
        "lastName": "schrager",
        "cityName": "new york",
        "department": "Account Management",
        "title": "VP, Account Director",
        "number": "212-981-7878",
        "seatlocation": "1433-01",
        "gender": "f"
    },
    {
        "fullname": "Stacy Schwartz",
        "fullname_lc": "stacy schwartz",
        "firstName": "stacy",
        "lastName": "schwartz",
        "cityName": "new york",
        "department": "Integrated Business Affairs",
        "title": "VP, Group Director",
        "number": "212-981-7959",
        "seatlocation": "1323-13",
        "gender": "f"
    },
    {
        "fullname": "Alla Seck",
        "fullname_lc": "alla seck",
        "firstName": "alla",
        "lastName": "seck",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "Sr Network Administrator",
        "number": "212-981-7949",
        "seatlocation": "131T-03",
        "gender": "m"
    },
    {
        "fullname": "Madison Shaffer",
        "fullname_lc": "madison shaffer",
        "firstName": "madison",
        "lastName": "shaffer",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7966",
        "seatlocation": "1433-07",
        "gender": "f"
    },
    {
        "fullname": "Breyden Sheldon",
        "fullname_lc": "breyden sheldon",
        "firstName": "breyden",
        "lastName": "sheldon",
        "cityName": "new york",
        "department": "Creative",
        "title": "Copywriter",
        "number": "212-981-7751",
        "seatlocation": "1420-49",
        "gender": "m"
    },
    {
        "fullname": "Sang Min Shin",
        "fullname_lc": "sang min shin",
        "firstName": "sang",
        "lastName": "min shin",
        "cityName": "new york",
        "department": "Digital Creative",
        "title": "Creative Developer",
        "number": "212-981-7548",
        "seatlocation": "1420-26",
        "gender": "m"
    },
    {
        "fullname": "Damaris Sierra",
        "fullname_lc": "damaris sierra",
        "firstName": "damaris",
        "lastName": "sierra",
        "cityName": "new york",
        "department": "Media",
        "title": "Paid Social Assistant",
        "number": "212-981-7906",
        "seatlocation": "1312-35",
        "gender": "f"
    },
    {
        "fullname": "Pete Slife",
        "fullname_lc": "pete slife",
        "firstName": "pete",
        "lastName": "slife",
        "cityName": "new york",
        "department": "Steelhead – NY",
        "title": "Editor",
        "number": "",
        "seatlocation": "",
        "gender": "m"
    },
    {
        "fullname": "Matthew Smith",
        "fullname_lc": "matthew smith",
        "firstName": "matthew",
        "lastName": "smith",
        "cityName": "new york",
        "department": "Data Strategy",
        "title": "Senior Data Strategist",
        "number": "212-981-7882",
        "seatlocation": "1433-57",
        "gender": "m"
    },
    {
        "fullname": "Shane Smith",
        "fullname_lc": "shane smith",
        "firstName": "shane",
        "lastName": "smith",
        "cityName": "new york",
        "department": "Content Production",
        "title": "Executive Content Producer",
        "number": "212-981-8096",
        "seatlocation": "1323-18",
        "gender": "m"
    },
    {
        "fullname": "Jessica Spar",
        "fullname_lc": "jessica spar",
        "firstName": "jessica",
        "lastName": "spar",
        "cityName": "new york",
        "department": "Media",
        "title": "Associate Director, Paid Social",
        "number": "212-981-7556",
        "seatlocation": "1312-13",
        "gender": "f"
    },
    {
        "fullname": "Alexander Studer",
        "fullname_lc": "alexander studer",
        "firstName": "alexander",
        "lastName": "studer",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Assistant Account Executive",
        "number": "212-981-7654",
        "seatlocation": "1312-06",
        "gender": "m"
    },
    {
        "fullname": "Tara Suess",
        "fullname_lc": "tara suess",
        "firstName": "tara",
        "lastName": "suess",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "Integrated Media Planner",
        "number": "212-981-7745",
        "seatlocation": "1433-44",
        "gender": "f"
    },
    {
        "fullname": "Chad Sullivan",
        "fullname_lc": "chad sullivan",
        "firstName": "chad",
        "lastName": "sullivan",
        "cityName": "new york",
        "department": "Media Planning",
        "title": "Digital Media Planner",
        "number": "212-981-8095",
        "seatlocation": "1433-45",
        "gender": "m"
    },
    {
        "fullname": "Brian Szabo",
        "fullname_lc": "brian szabo",
        "firstName": "brian",
        "lastName": "szabo",
        "cityName": "new york",
        "department": "Social and Community",
        "title": "Brand Publishing & Community Manager",
        "number": "212-981-8033",
        "seatlocation": "1420-10",
        "gender": "m"
    },
    {
        "fullname": "Rakesh Talwar",
        "fullname_lc": "rakesh talwar",
        "firstName": "rakesh",
        "lastName": "talwar",
        "cityName": "new york",
        "department": "Account Management",
        "title": "SVP, Account Director",
        "number": "212-981-7598",
        "seatlocation": "1442-03",
        "gender": "m"
    },
    {
        "fullname": "Maria Taris",
        "fullname_lc": "maria taris",
        "firstName": "maria",
        "lastName": "taris",
        "cityName": "new york",
        "department": "Integrated Business Affairs",
        "title": "SVP, Director of Business Affairs",
        "number": "212-981-7849",
        "seatlocation": "1323-12",
        "gender": "f"
    },
    {
        "fullname": "Vinney Tecchio",
        "fullname_lc": "vinney tecchio",
        "firstName": "vinney",
        "lastName": "tecchio",
        "cityName": "new york",
        "department": "Creative",
        "title": "Creative Director",
        "number": "212-981-7566",
        "seatlocation": "1433-06",
        "gender": "m"
    },
    {
        "fullname": "Oliver Torres",
        "fullname_lc": "oliver torres",
        "firstName": "oliver",
        "lastName": "torres",
        "cityName": "new york",
        "department": "Finance",
        "title": "Financial Analyst",
        "number": "212-981-7576",
        "seatlocation": "1312-37",
        "gender": "m"
    },
    {
        "fullname": "Mary Toto",
        "fullname_lc": "mary toto",
        "firstName": "mary",
        "lastName": "toto",
        "cityName": "new york",
        "department": "Digital Production",
        "title": "Executive Producer",
        "number": "212-981-7585",
        "seatlocation": "1323-07",
        "gender": "f"
    },
    {
        "fullname": "Richard VanSteenburgh",
        "fullname_lc": "richard vansteenburgh",
        "firstName": "richard",
        "lastName": "vansteenburgh",
        "cityName": "new york",
        "department": "Data Strategy",
        "title": "EVP, Director of Data Analytics",
        "number": "212-981-7910",
        "seatlocation": "1415-11",
        "gender": "m"
    },
    {
        "fullname": "Washington Vazquez",
        "fullname_lc": "washington vazquez",
        "firstName": "washington",
        "lastName": "vazquez",
        "cityName": "new york",
        "department": "Finance",
        "title": "Sr Accountant",
        "number": "212-981-7838",
        "seatlocation": "1312-54",
        "gender": "m"
    },
    {
        "fullname": "Jeffrey Vinick",
        "fullname_lc": "jeffrey vinick",
        "firstName": "jeffrey",
        "lastName": "vinick",
        "cityName": "new york",
        "department": "Creative",
        "title": "EVP, Executive Creative Director",
        "number": "212-981-8061",
        "seatlocation": "1415-17",
        "gender": "m"
    },
    {
        "fullname": "Mai Vu",
        "fullname_lc": "mai vu",
        "firstName": "mai",
        "lastName": "vu",
        "cityName": "new york",
        "department": "Strategy",
        "title": "VP, Planning Director",
        "number": "212-981-7998",
        "seatlocation": "1442-04",
        "gender": "f"
    },
    {
        "fullname": "James Wallace",
        "fullname_lc": "james wallace",
        "firstName": "james",
        "lastName": "wallace",
        "cityName": "new york",
        "department": "Finance",
        "title": "Senior Financial Analyst",
        "number": "212-981-7616",
        "seatlocation": "1312-08",
        "gender": "m"
    },
    {
        "fullname": "Ace Wang",
        "fullname_lc": "ace wang",
        "firstName": "ace",
        "lastName": "wang",
        "cityName": "new york",
        "department": "Strategy",
        "title": "Senior Strategist, Digital",
        "number": "212-651-8477",
        "seatlocation": "1420-02",
        "gender": "f"
    },
    {
        "fullname": "Craig Ward",
        "fullname_lc": "craig ward",
        "firstName": "craig",
        "lastName": "ward",
        "cityName": "new york",
        "department": "Creative",
        "title": "SVP, Head of Design",
        "number": "212-981-8105",
        "seatlocation": "1414-01",
        "gender": "m"
    },
    {
        "fullname": "Dennis Warlick",
        "fullname_lc": "dennis warlick",
        "firstName": "dennis",
        "lastName": "warlick",
        "cityName": "new york",
        "department": "Information Technology",
        "title": "VP, Strategic Technologies",
        "number": "212-981-8118",
        "seatlocation": "1323-01",
        "gender": "m"
    },
    {
        "fullname": "AJ Warren",
        "fullname_lc": "aj warren",
        "firstName": "aj",
        "lastName": "warren",
        "cityName": "new york",
        "department": "Creative",
        "title": "Senior Copywriter",
        "number": "212-981-7696",
        "seatlocation": "1415-20",
        "gender": "m"
    },
    {
        "fullname": "Lori Anne Watkins",
        "fullname_lc": "lori anne watkins",
        "firstName": "lori",
        "lastName": "anne watkins",
        "cityName": "new york",
        "department": "Media Buying",
        "title": "Network Operations Manager",
        "number": "212-981-7960",
        "seatlocation": "",
        "gender": "f"
    },
    {
        "fullname": "Danielle Weiner",
        "fullname_lc": "danielle weiner",
        "firstName": "danielle",
        "lastName": "weiner",
        "cityName": "new york",
        "department": "Account Management",
        "title": "Account Supervisor",
        "number": "212-981-7926",
        "seatlocation": "1433-37",
        "gender": "f"
    },
    {
        "fullname": "Vinnette Willie-Bygrave",
        "fullname_lc": "vinnette willie-bygrave",
        "firstName": "vinnette",
        "lastName": "willie-bygrave",
        "cityName": "new york",
        "department": "Finance",
        "title": "T & E Coordinator",
        "number": "212-981-8094",
        "seatlocation": "1312-45",
        "gender": "f"
    },
    {
        "fullname": "Denise Wilson",
        "fullname_lc": "denise wilson",
        "firstName": "denise",
        "lastName": "wilson",
        "cityName": "new york",
        "department": "Finance",
        "title": "Accounts Payable Supervisor",
        "number": "212-981-7787",
        "seatlocation": "1312-56",
        "gender": "f"
    },
    {
        "fullname": "Emily Yao",
        "fullname_lc": "emily yao",
        "firstName": "emily",
        "lastName": "yao",
        "cityName": "new york",
        "department": "Media",
        "title": "Associate Media Director",
        "number": "212-981-7972",
        "seatlocation": "1433-41",
        "gender": "f"
    },
    {
        "fullname": "Davis Yee",
        "fullname_lc": "davis yee",
        "firstName": "davis",
        "lastName": "yee",
        "cityName": "new york",
        "department": "Studio",
        "title": "Studio Manager",
        "number": "212-981-7571",
        "seatlocation": "1322-45",
        "gender": "m"
    },
    {
        "fullname": "Eden Zugel",
        "fullname_lc": "eden zugel",
        "firstName": "eden",
        "lastName": "zugel",
        "cityName": "new york",
        "department": "Operations",
        "title": "Operations Manager",
        "number": "212-981-7617",
        "seatlocation": "1301-08",
        "gender": "f"
    }
];

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
var SHUTDOWN_MESSAGE = "Ok.";

//This is the message a user will hear when they try to cancel or stop the skill.
var EXIT_SKILL_MESSAGE = "Ok.";

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
        var output = "Ok, starting over." + getGenericHelpMessage(data);
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
        var output = "Ok, starting over." + getGenericHelpMessage(data);
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
        var output = "Ok, starting over." + getGenericHelpMessage(data);
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
        var output = "Ok, starting over." + getGenericHelpMessage(data);
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
    var sentences = ["ask - who is " + getRandomName(data), "say - find an Deutscher in " + getRandomDepartment(data) + " department."];
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