  
#MightyMinds API

This program is under development 

##Technology Used
MEAN Stack (MongoDB, Express, Angular, Nodejs)

##Current Limitations

No security yet simply for testing

###Currently Available Routes






| School | Sponsor | Account |
| --------- | --------- | ---------- |
| [*Add Student*](#add-student) | &nbsp; | [*Login*](#login-school-or-Sponsor) |
| [*Delete Student*](#delete-student) | &nbsp; | [*Add School*](#add-school)|
| [*List Student*](#list-student) | &nbsp; | [*Add Sponsor*](#register-sponsor)|
| [*Edit Student*](#edit-student) | &nbsp; | &nbsp; |

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
//this returns the previous data
{
  "__v": 0,
  "_id": "571d68c1d0af74e60c17e4e0",
  "address": "student1Address",
  "bio": "cool kid test2 said",
  "currentfunds": 10000,
  "currentschool": "dat2School",
  "email": "student1@email.com",
  "firstname": "Stu",
  "future": "Scientist2",
  "goal": 15000,
  "lastname": "Ent1",
  "middlename": "D",
  "suffix": "",
  "transactions": [
    "571d811d8d49ad70179d8ab0",
    "571d81228d49ad70179d8ab1"
  ]
}
//if no student exists
null
```
