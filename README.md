 MightyMinds API
**API MEAN Stack**

This program is under development and currently has the capbility to add and login schools and also add and login sponsors 
##Technology Used
MEAN Stack (MongoDB, Express, Angular, Nodejs)

#Current Limitations
No security yet simply for testing

##Accessible Routes

##Login School

Function for logging in a school or sponsor with an account

<table>
<tr><td>Route</td> <td>/loginschool</td></tr>
<tr><td>HTML Method</td> <td>POST</td></tr>
<tr><td>req.body</td> <td>{
    "username":"CESMARIKINA",
    "password":"123456"}</td></tr>
<tr><td>Successful response(if account is school)</td> <td>Status (200) {
  "result": {
    "username": "CESMARIKINA",
    "password": "123456",
    "address": "J.MOLINA ST CONCEPCION UNO MARIKINA CITY",
    "email": "cesmarikina@gmail.com",
    "_id": "5718890de5f0d9832366a394",
    "__v": 0,
    "students": []
  },
  "accounttype": "School"
}</td></tr>
<tr><td>Successful response(if account is sponsor)</td> <td>Status (200) {
  "result": {
    "username": "nekomarino",
    "password": "123456",
    "firstname": "Ian Danico",
    "middlename": "David",
    "lastname": "Marino",
    "address": "Marikina City",
    "email": "nekomarino@gmail.com",
    "_id": "571889e92be2551824f6a8f8",
    "__v": 0,
    "students": []
  },
  "accounttype": "Sponsor"
}</td></tr>
<tr><td>Failed response</td> <td>Fail Login (Status 400)</td></tr>
</table>

##Add School
Function for adding school (Functions only for testing)

<table>
<tr><td>Route</td> <td>/addschool</td></tr>
<tr><td>HTML Method</td> <td>POST</td></tr>
<tr><td>req.body</td> <td>{
    "username":"CESMARIKINA",
    "password":"123456",
    "schooolname":"Concepcion Elementary School",
    "address":"J.MOLINA ST CONCEPCION UNO MARIKINA CITY"
}</td></tr>
<tr><td>Successful response</td> <td>Success Sending New School!</td></tr>
<tr><td>Failed response</td> <td>Fail Register (Status 400)</td></tr>
</table>

##Add Sponsor

Function for adding a sponsor

<table>
<tr><td>Route</td> <td>/registersponsor</td></tr>
<tr><td>HTML Method</td> <td>POST</td></tr>
<tr><td>req.body</td> <td>{
            "username":"nekomarino",
            "password":"123456",
            "firstname":"Ian Danico",
            "middlename":"David",
            "lastname":"Marino",
            "address":"Marikina City"
}</td></tr>
<tr><td>Successful response</td> <td>Success Sending New Sponsor!</td></tr>
<tr><td>Failed response</td> <td>Fail Register (Status 400)</td></tr>
</table>
