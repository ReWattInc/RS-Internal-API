'use strict';

exports.deleteSynch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "aeiou",
  "status" : 123
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSynch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "synchObjects" : "",
  "isDraft" : true,
  "options" : {
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

exports.postNewSynch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request body (Synch)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : 123,
  "message" : "Not Found",
  "status" : 404
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putSynch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Integer)
  * request Body (SynchSecure)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "aeiou",
  "status" : 123
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

