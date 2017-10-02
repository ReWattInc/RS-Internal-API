'use strict';

var url = require('url');


var Admin = require('./AdminService');


module.exports.deleteSynchType = function deleteSynchType (req, res, next) {
  Admin.deleteSynchType(req.swagger.params, res, next);
};

module.exports.getSynchs = function getSynchs (req, res, next) {
  Admin.getSynchs(req.swagger.params, res, next);
};

module.exports.getUsers = function getUsers (req, res, next) {
  Admin.getUsers(req.swagger.params, res, next);
};

module.exports.postSynchType = function postSynchType (req, res, next) {
  Admin.postSynchType(req.swagger.params, res, next);
};

module.exports.putSynchType = function putSynchType (req, res, next) {
  Admin.putSynchType(req.swagger.params, res, next);
};
