'use strict';

var utils = require('../utils/writer.js');
var Sessionverwaltung = require('../service/SessionverwaltungService');

module.exports.loginPOST = function loginPOST (req, res, next) {
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;
  Sessionverwaltung.loginPOST(email,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutPOST = function logoutPOST (req, res, next) {
  var sessionToken = req.swagger.params['sessionToken'].value;
  Sessionverwaltung.logoutPOST(sessionToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileGET = function profileGET (req, res, next) {
  var sessionToken = req.swagger.params['sessionToken'].value;
  Sessionverwaltung.profileGET(sessionToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
