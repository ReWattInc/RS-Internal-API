'use strict';

var url = require('url');


var SynchTypes = require('./SynchTypesService');


module.exports.getSynchType = function getSynchType (req, res, next) {
  SynchTypes.getSynchType(req.swagger.params, res, next);
};

module.exports.getSynchTypeIndex = function getSynchTypeIndex (req, res, next) {
  SynchTypes.getSynchTypeIndex(req.swagger.params, res, next);
};
