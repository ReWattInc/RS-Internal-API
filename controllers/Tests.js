'use strict';

var url = require('url');


var Tests = require('./TestsService');


module.exports.pingNewSynch = function pingNewSynch (req, res, next) {
  Tests.pingNewSynch(req.swagger.params, res, next);
};
