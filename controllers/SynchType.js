'use strict';

var url = require('url');


var SynchType = require('./SynchTypeService');


module.exports.getSynchType = function getSynchType (req, res, next) {
  SynchType.getSynchType(req.swagger.params, res, next);
};

module.exports.getSynchTypeIndex = function getSynchTypeIndex (req, res, next) {
  SynchType.getSynchTypeIndex(req.swagger.params, res, next);
};
