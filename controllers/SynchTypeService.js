'use strict';

exports.getSynchType = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (UUID)
  **/
    var examples = {};
  examples['application/json'] = {
  "optionsList" : {
    "enableNotificationOnError" : true,
    "enableDebugLogging" : true
  },
  "source" : {
    "environment" : "aeiou",
    "application" : {
      "loginUrl" : "aeiou",
      "name" : "aeiou",
      "testAvailable" : true
    },
    "credentials" : {
      "credentialType" : "aeiou",
      "password" : "aeiou",
      "username" : "aeiou"
    },
    "options" : {
      "delimiter" : "aeiou",
      "insertUpsert" : "aeiou",
      "ignoreNulls" : true
    }
  },
  "version" : {
    "number" : 1,
    "description" : "In this version of the sync only basic lead details are carried over"
  },
  "friendlyName" : "aeiou",
  "objectList" : "",
  "isComplete" : true,
  "status" : "aeiou",
  "target" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSynchTypeIndex = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "results" : [ {
    "targetimage" : "aeiou",
    "source" : "aeiou",
    "sourceImage" : "aeiou",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "version" : 123,
    "target" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

