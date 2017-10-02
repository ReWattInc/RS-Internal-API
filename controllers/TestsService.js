'use strict';

exports.pingNewSynch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request Body (Synch)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "ConnectionMessage" : "Server failed to connect",
    "ConnectionEstablished" : false
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

