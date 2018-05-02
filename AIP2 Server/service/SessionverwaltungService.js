'use strict';


/**
 * Loggt einen User ein
 *
 * email String Email-Adresse des Nutzers (optional)
 * password String Passwort des Nutzers (optional)
 * returns inline_response_200_1
 **/
exports.loginPOST = function(email,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sessionToken" : "sessionToken"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
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
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

