'use strict';

var url = require('url');


var Synchs = require('./SynchsService');


module.exports.deleteSynch = function deleteSynch (req, res, next) {
  Synchs.deleteSynch(req.swagger.params, res, next);
};

module.exports.getSynch = function getSynch (req, res, next) {
  Synchs.getSynch(req.swagger.params, res, next);
};

module.exports.postNewSynch = function postNewSynch (req, res, next) {
  Synchs.postNewSynch(req.swagger.params, res, next);
};

module.exports.putSynch = function putSynch (req, res, next) {
  Synchs.putSynch(req.swagger.params, res, next);
};
