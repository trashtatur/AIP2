# SecurityGuardAccounts.SessionverwaltungApi

All URIs are relative to *https://virtserver.swaggerhub.com/parakoopaG/aip-securit-guard-accounts/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPost**](SessionverwaltungApi.md#loginPost) | **POST** /login | 
[**logoutPost**](SessionverwaltungApi.md#logoutPost) | **POST** /logout | 
[**profileGet**](SessionverwaltungApi.md#profileGet) | **GET** /profile | 


<a name="loginPost"></a>
# **loginPost**
> InlineResponse2001 loginPost(opts)



Loggt einen User ein

### Example
```javascript
import SecurityGuardAccounts from 'security_guard_accounts';

let apiInstance = new SecurityGuardAccounts.SessionverwaltungApi();

let opts = { 
  'email': "email_example", // String | Email-Adresse des Nutzers
  'password': "password_example" // String | Passwort des Nutzers
};

apiInstance.loginPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email-Adresse des Nutzers | [optional] 
 **password** | **String**| Passwort des Nutzers | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="logoutPost"></a>
# **logoutPost**
> logoutPost(opts)



Session beenden, Session-Token invalidieren

### Example
```javascript
import SecurityGuardAccounts from 'security_guard_accounts';

let apiInstance = new SecurityGuardAccounts.SessionverwaltungApi();

let opts = { 
  'sessionToken': "sessionToken_example" // String | Session-Token erstellt von der Login-Schnittstelle
};

apiInstance.logoutPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionToken** | **String**| Session-Token erstellt von der Login-Schnittstelle | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="profileGet"></a>
# **profileGet**
> Account profileGet(opts)



Account-Daten des eigenen Accounts abrufen

### Example
```javascript
import SecurityGuardAccounts from 'security_guard_accounts';

let apiInstance = new SecurityGuardAccounts.SessionverwaltungApi();

let opts = { 
  'sessionToken': "sessionToken_example" // String | Session-Token erstellt von der Login-Schnittstelle
};

apiInstance.profileGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionToken** | **String**| Session-Token erstellt von der Login-Schnittstelle | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

