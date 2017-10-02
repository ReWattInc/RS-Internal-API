'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.deleteUser = function deleteUser (req, res, next) {
  Users.deleteUser(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Users.getUser(req.swagger.params, res, next);
};

module.exports.getUserSynchs = function getUserSynchs (req, res, next) {
  Users.getUserSynchs(req.swagger.params, res, next);
};

module.exports.postUser = function postUser (req, res, next) {
  Users.postUser(req.swagger.params, res, next);
};

module.exports.putUser = function putUser (req, res, next) {
  Users.putUser(req.swagger.params, res, next);
};
