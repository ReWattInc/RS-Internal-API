'use strict';

exports.deleteUser = function(args, res, next) {
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

exports.getUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "firstName" : "aeiou",
  "lastName" : "aeiou",
  "organization" : {
    "name" : "aeiou",
    "id" : 123
  },
  "isAdmin" : true,
  "email" : "aeiou",
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserSynchs = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "results" : [ {
    "synch" : {
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
    },
    "id" : 5
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

exports.postUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request body (User)
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

exports.putUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Integer)
  * request Body (User)
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

