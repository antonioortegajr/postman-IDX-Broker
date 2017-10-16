/**
* The following checks the return against specified schema for an API call
* Example JSON Schema for mls/age/{{approvedMLS}}
* Require keys "lastDownload" and "lastProcess"
* Allow for strings or null values
*/

//Sample schema check
// Define the JSON Schema
const callSchema = {
  "required": ["lastDownload", "lastProcess"],
  "properties": {
    "lastDownload": {
      "type": ["string", "null"]
    },
    "lastProcess": {
        "type": ["string", "null"]
    }
  }
};

// Test whether the response matches the schema
var apiResponse = JSON.parse(responseBody);
tests["Valid against schema"] = tv4.validate(apiResponse, callSchema);
