/** Check status code is under 300 if so run tests
* The following are standard tests to be preformed on all endpoints.
* Some tests will only run if status is below 300
*/
if (responseCode.code < 300) {
    // rerport the status code is in the 200s
    tests["Status code is 200 or 204"] = responseCode.code < 300;

    // get response body length for test
    var legnth = responseBody.length;

    // tests when code is 200 and body lenth greater than 0
    if (responseCode.code === 200 && legnth > 0) {
        // set variable of body legnth and assume true
        var bodyLength = true;

        // parse json response
        var isJson = JSON.parse(responseBody);

        // test for valid json
        tests["Valid JSON"] = isJson;

    }
    // test body length when code is 204. Must be 0
    if (responseCode.code === 204 && legnth === 0) {
        //if body legnth is 0 then set variable to true
        var bodyLength = true;
    }
}

// run test for body legnth
tests["Retun Length is correct for http code"] = bodyLength;

// test for a php warning
if (!responseBody.has("PHP WARNING")) {
    var phpWarn = true;
}
tests["Does NOT contain text \"PHP Warning\""] = phpWarn;

//run test that response was under 30 seconds
tests["Response time is under than 30 sec"] = responseTime < 30000;


tests["Content-Type is present"] = postman.getResponseHeader("Content-Type");
