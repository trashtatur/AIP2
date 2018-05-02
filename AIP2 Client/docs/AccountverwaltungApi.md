# SecurityGuardAccounts.AccountverwaltungApi

All URIs are relative to *https://virtserver.swaggerhub.com/parakoopaG/aip-securit-guard-accounts/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminAccountIdDelete**](AccountverwaltungApi.md#adminAccountIdDelete) | **DELETE** /admin/account/{id} | 
[**adminAccountIdGet**](AccountverwaltungApi.md#adminAccountIdGet) | **GET** /admin/account/{id} | 
[**adminAccountIdPost**](AccountverwaltungApi.md#adminAccountIdPost) | **POST** /admin/account/{id} | 
[**adminAccountPut**](AccountverwaltungApi.md#adminAccountPut) | **PUT** /admin/account | 


<a name="adminAccountIdDelete"></a>
# **adminAccountIdDelete**
> adminAccountIdDelete(id)



Löscht einen Account

### Example
```javascript
import SecurityGuardAccounts from 'security_guard_accounts';

let apiInstance = new SecurityGuardAccounts.AccountverwaltungApi();

let id = "id_example"; // String | Id des Accounts der abgerufen werden soll


apiInstance.adminAccountIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Id des Accounts der abgerufen werden soll | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="adminAccountIdGet"></a>
# **adminAccountIdGet**
> Account adminAccountIdGet(id)



Account-Daten eines beliebigen Accounts abrufen

### Example
```javascript
import SecurityGuardAccounts from 'security_guard_accounts';

let apiInstance = new SecurityGuardAccounts.AccountverwaltungApi();

let id = "id_example"; // String | Id des Accounts der abgerufen werden soll


apiInstance.adminAccountIdGet(id, (error, data, response) => {
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
 **id** | **String**| Id des Accounts der abgerufen werden soll | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="adminAccountIdPost"></a>
# **adminAccountIdPost**
> adminAccountIdPost(id, account)



Daten eines Users ändern

### Example
```javascript
import SecurityGuardAccounts from 'security_guard_accounts';

let apiInstance = new SecurityGuardAccounts.AccountverwaltungApi();

let id = "id_example"; // String | Id des Accounts der abgerufen werden soll

let account = new SecurityGuardAccounts.Account(); // Account | Neue Daten des Accounts (ohne id und mit unverschlüsseltem Passwort)


apiInstance.adminAccountIdPost(id, account, (error, data, response) => {
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
 **id** | **String**| Id des Accounts der abgerufen werden soll | 
 **account** | [**Account**](Account.md)| Neue Daten des Accounts (ohne id und mit unverschlüsseltem Passwort) | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="adminAccountPut"></a>
# **adminAccountPut**
> InlineResponse200 adminAccountPut(account)



### Example
```javascript
import SecurityGuardAccounts from 'security_guard_accounts';

let apiInstance = new SecurityGuardAccounts.AccountverwaltungApi();

let account = new SecurityGuardAccounts.Account(); // Account | Daten des Accounts, der angelegt werden soll (ohne id und mit unverschlüsseltem Passwort)


apiInstance.adminAccountPut(account, (error, data, response) => {
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
 **account** | [**Account**](Account.md)| Daten des Accounts, der angelegt werden soll (ohne id und mit unverschlüsseltem Passwort) | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

