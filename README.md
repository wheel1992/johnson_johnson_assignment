
# Assigment

## Author
Joseph Cheng

## API

### Create Order

#### URL

```
POST /orders

```

#### Request Body
```json
{
  "products": [
    {
      "id": 1000,
      "quantity": 100
    },
    {
      "id": 1200,
      "quantity": 500
    }
  ],
  "currency": "sgd",
  "discount": false,
}
```

#### Response

##### 200 OK
```
{
  "orderId": 12303485032,
  "products": [
    {
      "id": 1000,
      "quantity": 100
    },
    {
      "id": 1200,
      "quantity": 500
    }
  ],
  "currency": "sgd",
  "discount": false,
  "subTotal": 1000.0,
  "netTotal": 1000.0,
  "discountAmount": 0.0
}

```

##### 400 Bad Request
```json
{
  "error": "Invalid request. No order will be created."
}
```

##### 500 Internal Error
```json
{
  "error": "An error occurred while creating the order"
}
```