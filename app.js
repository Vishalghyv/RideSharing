const express = require('express')
const app = express()
const port = 4200
app.set('view engine', 'ejs');
var bodyParser = require('body-parser')
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// In memory database
allRides = {};
allUsers = {};

app.use('/', require('./routes/user'));
app.use('/', require('./routes/ride'));
app.get('/', (req, res) => {
  res.redirect("/register");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})