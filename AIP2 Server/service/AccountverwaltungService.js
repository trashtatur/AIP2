'use strict';


/**
 * Löscht einen Account
 *
 * id String Id des Accounts der abgerufen werden soll
 * no response value expected for this operation
 **/
exports.adminAccountIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Account-Daten eines beliebigen Accounts abrufen
 *
 * id String Id des Accounts der abgerufen werden soll
 * returns Account
 **/
exports.adminAccountIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Daten eines Users ändern
 *
 * id String Id des Accounts der abgerufen werden soll
 * account Account Neue Daten des Accounts (ohne id und mit unverschlüsseltem Passwort)
 * no response value expected for this operation
 **/
exports.adminAccountIdPOST = function(id,account) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * account Account Daten des Accounts, der angelegt werden soll (ohne id und mit unverschlüsseltem Passwort)
 * returns inline_response_200
 **/
exports.adminAccountPUT = function(account) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

