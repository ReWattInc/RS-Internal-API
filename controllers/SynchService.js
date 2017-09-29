'use strict';

exports.pingNewSynch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request Body (SynchTestPing)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "ConnectionEstablished" : false,
    "Connectionmessage" : "Server failed to connect"
  },
  "message" : "No message",
  "status" : "Success"
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
  * request body (SynchTypesItemDetails)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "The request was successful",
  "status" : "Success"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

