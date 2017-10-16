/** Things to check
* The following are variables I will check in my collection and postman runner
*/

//http response from postman API call
var responseCode = responseCode.code;

//validate response body is JSON
var isValidJson= JSON.parse(responseBody);

//get a response header by key name. Content-Type header in exampel below
var responseVar = postman.getResponseHeader("Content-Type");

//set global variable
var globalVar = postman.setGlobalVariable("myNewVariable", "someValue");

//clear a global variable
postman.clearGlobalVariable("myVariable");

//get response time
var responseTime = responseTime;

//get envirnment variable by key name. accesskey is in all my environments for this API
var accessKey = pm.environment.get("accesskey");
