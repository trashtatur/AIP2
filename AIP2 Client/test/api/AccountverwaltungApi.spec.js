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
    instance = new SecurityGuardAccounts.AccountverwaltungApi();
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

  describe('AccountverwaltungApi', function() {
    describe('adminAccountIdDelete', function() {
      it('should call adminAccountIdDelete successfully', function(done) {
        //uncomment below and update the code to test adminAccountIdDelete
        //instance.adminAccountIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminAccountIdGet', function() {
      it('should call adminAccountIdGet successfully', function(done) {
        //uncomment below and update the code to test adminAccountIdGet
        //instance.adminAccountIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminAccountIdPost', function() {
      it('should call adminAccountIdPost successfully', function(done) {
        //uncomment below and update the code to test adminAccountIdPost
        //instance.adminAccountIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminAccountPut', function() {
      it('should call adminAccountPut successfully', function(done) {
        //uncomment below and update the code to test adminAccountPut
        //instance.adminAccountPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
