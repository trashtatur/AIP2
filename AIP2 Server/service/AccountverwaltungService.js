'use strict';

const uuidv1 = require('uuid/v1');

var demoAccounts = {
  1: {
      "password": "admin1234",
      "name": "admin",
      "id": 1,
      "email": "admin@securetech.com"
  }
}

exports.demoAccounts = demoAccounts


/**
 * Löscht einen Account
 *
 * id String Id des Accounts der abgerufen werden soll
 * no response value expected for this operation
 **/
exports.adminAccountIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    delete demoAccounts[id];
    resolve({status: "ok"});
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
        if (demoAccounts[id]) {
          resolve(demoAccounts[id])
        } else {
          resolve({code: 404, message: 'User not found.'})
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
      if (demoAccounts[id]) {
          account.id = id; // Die darf man nicht ändern!
          demoAccounts[id] = account;
          resolve({status: "ok"});
      } else {
          resolve({code: 404, message: 'User not found.'})
      }
  });
}


/**
 *
 * account Account Daten des Accounts, der angelegt werden soll (ohne id und mit unverschlüsseltem Passwort)
 * returns inline_response_200
 **/
exports.adminAccountPUT = function(account) {
  return new Promise(function(resolve, reject) {
      var id = uuidv1();
      account.id = id;
      demoAccounts[id] = account;
      resolve({id: id});
  });
}

