/**
 * Security Guard Accounts
 * RESTful API für AIP2
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SecurityGuardAccounts);
  }
}(this, function(expect, SecurityGuardAccounts) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SecurityGuardAccounts.InlineResponse2001();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2001', function() {
    it('should create an instance of InlineResponse2001', function() {
      // uncomment below and update the code to test InlineResponse2001
      //var instane = new SecurityGuardAccounts.InlineResponse2001();
      //expect(instance).to.be.a(SecurityGuardAccounts.InlineResponse2001);
    });

    it('should have the property sessionToken (base name: "sessionToken")', function() {
      // uncomment below and update the code to test the property sessionToken
      //var instane = new SecurityGuardAccounts.InlineResponse2001();
      //expect(instance).to.be();
    });

  });

}));
