'use strict';

const accountService = require('./AccountverwaltungService')
const uuidv1 = require('uuid/v1');

var demoSessions = {}

/**
 * Loggt einen User ein
 *
 * email String Email-Adresse des Nutzers (optional)
 * password String Passwort des Nutzers (optional)
 * returns inline_response_200_1
 **/
exports.loginPOST = function(email,password) {
  return new Promise(function(resolve, reject) {
      for (let id in accountService.demoAccounts) {
          let account = accountService.demoAccounts[id]
          if (account['password'] === password && account['email'] === email) {
              var sessiontoken = uuidv1();
              demoSessions[sessiontoken] = account.id;
              resolve({sessionToken: sessiontoken});
              return;
          }
      }
      resolve({code: 401, message: "Invalid username or password"});
  });
}


/**
 * Session beenden, Session-Token invalidieren
 *
 * sessionToken String Session-Token erstellt von der Login-Schnittstelle (optional)
 * no response value expected for this operation
 **/
exports.logoutPOST = function(sessionToken) {
  return new Promise(function(resolve, reject) {
      if (demoSessions[sessionToken]) {
          delete demoSessions[sessionToken];
          resolve({status: 'ok'})
      } else {
          resolve({code: 401, message: "User is not logged in"});
      }
  });
}


/**
 * Account-Daten des eigenen Accounts abrufen
 *
 * sessionToken String Session-Token erstellt von der Login-Schnittstelle (optional)
 * returns Account
 **/
exports.profileGET = function(sessionToken) {
  return new Promise(function(resolve, reject) {
      if (demoSessions[sessionToken]) {
          resolve(accountService.demoAccounts[demoSessions[sessionToken]])
      } else {
          resolve({code: 401, message: "User is not logged in"});
      }
  });
}

