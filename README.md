  
#MightyMinds API
**API MEAN Stack**

This program is under development and currently has the capbility to add and login schools and also add and login sponsors 
##Technology Used
MEAN Stack (MongoDB, Express, Angular, Nodejs)

##Current Limitations

No security yet simply for testing

###Accessible Routes

Below are routes that are currently usable

[*Login*](#login-School-or-Sponsor)
[*Add School*](#add-school)
[*Add Sponsor*](#add-sponsor)

####Login School or Sponsor ####

This would require the user's username and password

| Option | Value |
| -------- | ------ |
| Route | /login |
| Method | POST |
| Params | none|
| Post Data | JSON or JS Object |
| Usage | /login |

**Suggested Format :**

```json
  var data = {
    "username":"4testing",
    "password":"123456"
}
```

#####Return Data
```javascript
//if account is school
  "result": {
    "__v": 0,
    "_id": "571d670ed0af74e60c17e4d2",
    "address": "School1Address",
    "email": "School1@email.com",
    "password": "123456",
    "username": "School1",
    "students": [
      "571d67ded0af74e60c17e4de",
      "571d68c1d0af74e60c17e4e0",
      "571d68cdd0af74e60c17e4e1"
    ]
  },
  "accounttype": "School"
}
//if account is sponsor
{
  "result": {
    "__v": 0,
    "_id": "571d7eeed0af74e60c17e4e9",
    "address": "Marikina City",
    "email": "sponsor1@email.com",
    "firstname": "Spon",
    "lastname": "Sor",
    "middlename": "N",
    "password": "123456",
    "username": "Sponsor1",
    "transactions": [
      "571d811d8d49ad70179d8ab0",
      "571d81228d49ad70179d8ab1"
    ]
  },
  "accounttype": "Sponsor"
}
//if invalid login
FAIL LOGIN
```

####Add School

This would require the school's username and password

| Option | Value |
| - | - |
| Route | /addschool|
| Method | POST |
| Params | none|
| Post Data | JSON or JS Object |
| Usage | /addschool |

**Suggested Format :**

```json
{
    "username":"School3",
    "password":"123456",
    "schoolname":"School2",
    "address":"School2Address",
    "email":"School2@email.com"
}
```

#####Return Data
```javascript
//if account was addedd successfully
	Success Sending New School!
//if account adding failed
	Error message 
// possible duplicate of email in either account table or school table
Duplicate Email on Account
```

####Register Sponsor

This would require the sponsors's username and password

| Option | Value |
| - | - |
| Route | /registersponsor|
| Method | POST |
| Params | none|
| Post Data | JSON or JS Object |
| Usage | /registersponsor |

**Suggested Format :**

```json
{
            "username":"Sponsor2",
            "password":"123456",
            "firstname":"Spon",
            "middlename":"N",
            "lastname":"Sor",
            "address":"Marikina City",
            "email":"sponsor2@email.com"
}
```

#####Return Data
```javascript
//if account was addedd successfully
	Success Sending New Sponsor!
//if account adding failed
	Error message 
// possible duplicate of email in either account table or sponsor table
Duplicate Email on Account
```

