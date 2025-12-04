# Blog Backend

---

## 📌 Base URL

```
private
```

---

# [🔴🔴] Authentication

This section describe how to create user, login user and logout user.

## 👉 Create user

### ➤ Endpoint

```
POST /api/auth/signup
```

### Request Body

Send data as **JSON**:

```json
{
  "fullname": "Habibur Rahman",
  "email": "habibur@example.com",
  "password": "12345678"
}
```

### Validation Rules

| Field    | Rules                                                      |
| -------- | ---------------------------------------------------------- |
| fullname | Required, Minimum 3 characters, Maximum 100 characters      |
| email    | Required, Must be unique                                   |
| password | Required, Minimum 8 characters, Maximum 72 characters      |


### Success Response

#### ✅ Status Code: `201 Created`

```json
{
  "status": "success",
  "message": "user created successfully",
  "userId": "xxxxxxxxxxxxxxxxxxxxxx",
}
```

### Validation Error Response

#### ❌ Status Code: `400 Bad Request`

```json
{
  "status": "fail",
  "message": "Validation failed",
  "errors": [
    {
      "message": "fullname too short",
      "field": "fullname",
      "value": "Ta"
    },
    {
      "message": "password too short",
      "field": "password",
      "value": "1234567"
    }
  ]
}
```


### Error Fields Explained

| Key     | Description                         |
| ------- | ----------------------------------- |
| field   | Field name that failed validation   |
| value   | The actual value sent by the client |
| message | Exact reason of failure             |


### Duplicate Email Error

When trying with an already used email:

#### ❌ Status Code: `409 Conflict`

```json
{
  "status": "fail",
  "message": "Already exists",
  "errors": [
    {
      "message": "email already exist",
      "field": "email",
      "value": "habibur@example.com"
    }
  ]
}
```

## 👉 Login user

### ➤ Endpoint

```
POST /api/auth/signin
```

### Request Body

Send data as **JSON**:

```json
{
  "email": "habibur@example.com",
  "password": "12345678"
}
```

## 👉 Logout user

### ➤ Endpoint

```
POST /api/auth/signout
```

### Request Body

No need request body.
