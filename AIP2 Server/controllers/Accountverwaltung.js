'use strict';

var utils = require('../utils/writer.js');
var Accountverwaltung = require('../service/AccountverwaltungService');

module.exports.adminAccountIdDELETE = function adminAccountIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Accountverwaltung.adminAccountIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminAccountIdGET = function adminAccountIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Accountverwaltung.adminAccountIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminAccountIdPOST = function adminAccountIdPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var account = req.swagger.params['account'].value;
  Accountverwaltung.adminAccountIdPOST(id,account)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminAccountPUT = function adminAccountPUT (req, res, next) {
  var account = req.swagger.params['account'].value;
  Accountverwaltung.adminAccountPUT(account)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
