const express = require('express')
const app = express()
const port = 4200
app.set('view engine', 'ejs');
var bodyParser = require('body-parser')
 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var User = require("./models/User/User.js");
app.get('/', (req, res) => {
  res.send('Hello World!')
})

allRides = {};

// allRides.endRide = function(regNo) {
//     if (allRides[regNo] && allRides[regNo].getSeats()== 0) {
//         delete allRides[regNo];
//         return true;
//     }

//     return false;

// }

allUsers = {};

var name = "test";
var gender = "M";
var age = 21;
var password = "test";
var newUser = new User(name, gender, age, password);
allUsers[name] = newUser;


app.use('/', require('./routes/user'));
app.use('/', require('./routes/ride'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})