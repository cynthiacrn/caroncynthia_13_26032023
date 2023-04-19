# DefaultApi

All URIs are relative to *http://localhost:3001/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactionsGet**](DefaultApi.md#transactionsGet) | **GET** /transactions | Retrieve transactions for the current month
[**transactionsPost**](DefaultApi.md#transactionsPost) | **POST** /transactions | Add a new transaction
[**transactionsTransactionIdDelete**](DefaultApi.md#transactionsTransactionIdDelete) | **DELETE** /transactions/{transactionId} | Delete a transaction
[**transactionsTransactionIdGet**](DefaultApi.md#transactionsTransactionIdGet) | **GET** /transactions/{transactionId} | Retrieve a transaction by ID
[**transactionsTransactionIdPut**](DefaultApi.md#transactionsTransactionIdPut) | **PUT** /transactions/{transactionId} | Update a transaction


<a name="transactionsGet"></a>
# **transactionsGet**
> List&lt;Transaction&gt; transactionsGet(authorization)

Retrieve transactions for the current month

Returns a list of all transactions for the current month

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001/api/v1");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String authorization = "authorization_example"; // String | Attach Bearer JWT token
    try {
      List<Transaction> result = apiInstance.transactionsGet(authorization);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#transactionsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Attach Bearer JWT token |

### Return type

[**List&lt;Transaction&gt;**](Transaction.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="transactionsPost"></a>
# **transactionsPost**
> Transaction transactionsPost(authorization, transaction)

Add a new transaction

Adds a new transaction with the provided data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001/api/v1");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String authorization = "authorization_example"; // String | Attach Bearer JWT token
    TransactionInput transaction = new TransactionInput(); // TransactionInput | Transaction object
    try {
      Transaction result = apiInstance.transactionsPost(authorization, transaction);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#transactionsPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Attach Bearer JWT token |
 **transaction** | [**TransactionInput**](TransactionInput.md)| Transaction object |

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |

<a name="transactionsTransactionIdDelete"></a>
# **transactionsTransactionIdDelete**
> transactionsTransactionIdDelete(authorization, transactionId)

Delete a transaction

Deletes an existing transaction with the provided ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001/api/v1");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String authorization = "authorization_example"; // String | Attach Bearer JWT token
    Integer transactionId = 56; // Integer | ID of the transaction to delete
    try {
      apiInstance.transactionsTransactionIdDelete(authorization, transactionId);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#transactionsTransactionIdDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Attach Bearer JWT token |
 **transactionId** | **Integer**| ID of the transaction to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Not Found |  -  |

<a name="transactionsTransactionIdGet"></a>
# **transactionsTransactionIdGet**
> Transaction transactionsTransactionIdGet(authorization, transactionId)

Retrieve a transaction by ID

Returns the details of a transaction with the provided ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001/api/v1");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String authorization = "authorization_example"; // String | Attach Bearer JWT token
    Integer transactionId = 56; // Integer | ID of the transaction to retrieve
    try {
      Transaction result = apiInstance.transactionsTransactionIdGet(authorization, transactionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#transactionsTransactionIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Attach Bearer JWT token |
 **transactionId** | **Integer**| ID of the transaction to retrieve |

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

<a name="transactionsTransactionIdPut"></a>
# **transactionsTransactionIdPut**
> Transaction transactionsTransactionIdPut(authorization, transactionId, transaction)

Update a transaction

Updates an existing transaction with the provided data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001/api/v1");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String authorization = "authorization_example"; // String | Attach Bearer JWT token
    Integer transactionId = 56; // Integer | ID of the transaction to update
    TransactionInput transaction = new TransactionInput(); // TransactionInput | Transaction object
    try {
      Transaction result = apiInstance.transactionsTransactionIdPut(authorization, transactionId, transaction);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#transactionsTransactionIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Attach Bearer JWT token |
 **transactionId** | **Integer**| ID of the transaction to update |
 **transaction** | [**TransactionInput**](TransactionInput.md)| Transaction object |

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

