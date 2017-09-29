'use strict';

var url = require('url');


var Synch = require('./SynchService');


module.exports.pingNewSynch = function pingNewSynch (req, res, next) {
  Synch.pingNewSynch(req.swagger.params, res, next);
};

module.exports.postNewSynch = function postNewSynch (req, res, next) {
  Synch.postNewSynch(req.swagger.params, res, next);
};
