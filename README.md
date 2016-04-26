  
#MightyMinds API

This program is under development 

##Technology Used
MEAN Stack (MongoDB, Express, Angular, Nodejs)

##Current Limitations

No security yet simply for testing

###Currently Available Routes

| School | Sponsor | Account |
| --------- | --------- | ---------- |
| [*Add Student*](#add-student) | [*View Transactions*](#view-transactions) | [*Login*](#login-school-or-sponsor) |
| [*Delete Student*](#delete-student) | [*View Schools*](#view-schools) | [*Add School*](#add-school)|
| [*List Student*](#list-student) | [*Contribute*](#contribute) | [*Add Sponsor*](#register-sponsor)|
| [*Edit Student*](#edit-student) | &nbsp; | &nbsp; |

#ROUTES LIST

### Account Routes

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
[*Return to available Routes ▲*](#currently-available-routes)

####Add School

This would require the school's username and password

| Option | Value |
| -------- | ------- |
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
[*Return to available Routes ▲*](#currently-available-routes)

####Register Sponsor

This would require the sponsors's username and password

| Option | Value |
| -------- | -------- |
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
[*Return to available Routes ▲*](#currently-available-routes)

###School Routes

####Add Student

This would require the school's id to automatically save the new student to the current school

| Option | Value |
| -------- | -------- |
| Route | /school/addstudent/:id|
| Method | POST |
| Params | :id //which is school id|
| Post Data | JSON or JS Object |
| Usage | /school/addstudent/571d6717d0af74e60c17e4d4 |

**Suggested Format :**

```json
{
	"firstname":"Stu",
	"lastname" : "Ent4",
	"middlename": "D",
	"suffix":"",
	"address":"student4Address",	
	"email":"student4@email.com", //must be unique
	"currentfunds": 0,
	"goal" :15000,
	"bio":"cool kid test2 said",
	"future": "Scientist2",
	"currentschool": "dat2School"
}
```

#####Return Data
```javascript
//if account was addedd successfully
	Successful
//if account adding failed
	Error message 
```

[*Return to available Routes ▲*](#currently-available-routes)

####Delete Student

This would require the school's id so that no other school can delete a particular student

| Option | Value |
| -------- | -------- |
| Route | /school/deletestudent/:id/:sid |
| Method | DELETE |
| Params | :id (for school id) :sid for (studentid) |
| Post Data | none |
| Usage | /school/deletestudent/571d6717d0af74e60c17e4d4/571d97a9c4d360c71b77487d |

#####Return Data
```javascript
//if account was deleted successfully
{
  "status": "success delete",
  "deleted": {
    "firstname": "Test FName",
    "lastname": "Lname",
    "middlename": "D",
    "suffix": "",
    "address": "Test Address",
    "email": "testemail@email.com",
    "currentfunds": 0,
    "goal": 15000,
    "bio": "foo bar",
    "future": "test",
    "currentschool": "test",
    "_id": "571d97a9c4d360c71b77487d",
    "__v": 0,
    "transactions": []
  }
}
//if account deleting failed
	Nothing Deleted id not existing
```
[*Return to available Routes ▲*](#currently-available-routes)

####List Students

This would require the school's id to determine which school's student do you want to list

| Option | Value |
| -------- | -------- |
| Route | /school/liststudents/:id |
| Method | GET |
| Params | :id (for school id)  |
| Post Data | none |
| Usage | /school/liststudents/571d6717d0af74e60c17e4d4 |

#####Return Data
```javascript
{
  "_id": "571d6717d0af74e60c17e4d4",
  "students": [
    {
      "firstname": "Stu",
      "lastname": "Ent3",
      "middlename": "D",
      "suffix": "",
      "address": "student3Address",
      "email": "student3@email.com",
      "currentfunds": 0,
      "goal": 15000,
      "bio": "cool kid test2 said",
      "future": "Scientist2",
      "currentschool": "dat2School",
      "_id": "571d6935d0af74e60c17e4e3",
      "__v": 0,
      "transactions": []
    },
    {
      "firstname": "Stu",
      "lastname": "Ent4",
      "middlename": "D",
      "suffix": "",
      "address": "student4Address",
      "email": "student4@email.com",
      "currentfunds": 0,
      "goal": 15000,
      "bio": "cool kid test2 said",
      "future": "Scientist2",
      "currentschool": "dat2School",
      "_id": "571d693ed0af74e60c17e4e4",
      "__v": 0,
      "transactions": []
    }
  ]
}
//if no students
null
```
[*Return to available Routes ▲*](#currently-available-routes)

####Edit Student

This would require the student id to determine which student do you want to edit

| Option | Value |
| -------- | -------- |
| Route | /school/editstudent/:id |
| Method | POST |
| Params | :id (for student id)  |
| Post Data | JSON |
| Usage | /school/editstudent/571d68c1d0af74e60c17e4e0 |

**Suggested Format :**

```json
    {
      "firstname": "Ian",
      "lastname": "Marino",
      "middlename": "Danico",
      "suffix": "",
      "address": "Marikina City",
      "email": "nekomarino@gmail.com",
      "currentfunds": 0,
      "goal": 15000,
      "bio": "stuffs",
      "future": "Programmer",
      "currentschool": "TIP"
    }
```

#####Return Data
```javascript
[
  {
    "__v": 0,
    "_id": "571d670ed0af74e60c17e4d2",
    "address": "School1Address",
    "email": "School1@email.com",
    "students": [
      "571d67ded0af74e60c17e4de",
      "571d68c1d0af74e60c17e4e0",
      "571d68cdd0af74e60c17e4e1"
    ]
  },
  {
    "address": "School3Address",
    "email": "School3@email.com",
    "_id": "571d911cb7801b5f19da95db",
    "__v": 0,
    "students": []
  },
  {
    "__v": 0,
    "_id": "571d6717d0af74e60c17e4d4",
    "address": "School2Address",
    "email": "School2@email.com",
    "students": [
      "571d6935d0af74e60c17e4e3",
      "571d693ed0af74e60c17e4e4"
    ]
  }
]
```
[*Return to available Routes ▲*](#currently-available-routes)

###Sponsor Routes

###View Schools

| Option | Value |
| -------- | -------- |
| Route | /sponsor/viewschools|
| Method | GET |
| Params | NONE  |
| Post Data | NONE |
| Usage | localhost:6443/sponsor/viewschools |


#####Return Data
```json
[
  {
    "__v": 0,
    "_id": "571d670ed0af74e60c17e4d2",
    "address": "School1Address",
    "email": "School1@email.com",
    "students": [
      "571d67ded0af74e60c17e4de",
      "571d68c1d0af74e60c17e4e0",
      "571d68cdd0af74e60c17e4e1"
    ]
  },
  {
    "address": "School3Address",
    "email": "School3@email.com",
    "_id": "571d911cb7801b5f19da95db",
    "__v": 0,
    "students": []
  },
  {
    "__v": 0,
    "_id": "571d6717d0af74e60c17e4d4",
    "address": "School2Address",
    "email": "School2@email.com",
    "students": [
      "571d6935d0af74e60c17e4e3",
      "571d693ed0af74e60c17e4e4"
    ]
  }
]
```
[*Return to available Routes ▲*](#currently-available-routes)

###View Transactions

| Option | Value |
| -------- | -------- |
| Route | /sponsor/viewtransactions/:id/|
| Method | GET |
| Params | :id (sponsorid)  |
| Post Data | NONE |
| Usage | /sponsor/viewtransactions/5719e906a765ecd91d564430/ |


#####Return Data
```json
{
  "_id": "571d7eeed0af74e60c17e4e9",
  "transactions": [
    {
      "student": "571d68c1d0af74e60c17e4e0",
      "sponsor": "571d7eeed0af74e60c17e4e9",
      "amount": 5000,
      "isanon": false,
      "_id": "571d811d8d49ad70179d8ab0",
      "__v": 0
    },
    {
      "student": "571d68c1d0af74e60c17e4e0",
      "sponsor": "571d7eeed0af74e60c17e4e9",
      "amount": 5000,
      "isanon": false,
      "_id": "571d81228d49ad70179d8ab1",
      "__v": 0
    }
  ]
}
```
[*Return to available Routes ▲*](#currently-available-routes)

###Contribute

| Option | Value |
| -------- | -------- |
| Route | sponsor/:spnid/contribute/:stdid|
| Method | GET |
| Params | :spnid (sponsorid) :stdid (studentid)  |
| Post Data | NONE |
| Usage | /sponsor/571d6789d0af74e60c17e4dd/contribute/571d68cdd0af74e60c17e4e1 |

**Suggested Format**
```json
{
    "amount":15000,
    "isanon":false
}
```

#####Return Data

```javascript
TRANSACTION DONE THANK YOU!// if all values are valid
No such student exists
No such sponsor exists //if stdid or spnid is incorrect
```
[*Return to available Routes ▲*](#currently-available-routes)
