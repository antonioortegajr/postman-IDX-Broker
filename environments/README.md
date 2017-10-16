# Environments

Postman environments allow you set variables to be used with a collection.

Docs: https://www.getpostman.com/docs/environments

A environment will use the variables you set allowing you to quickly change from one base url to another or from one request header to another.
The example in this repo has the {{url}} variable set to api.idxbroker. This allows the tester
to switch between environments easily.

## Use

Import an environment to your postman and use with a collection expecting the set variables.

You can download this repo and import from local or create a json file on local and copy environment json to it.

Add you IDX API key(s) to the environment.

A collection can run using an environment.
