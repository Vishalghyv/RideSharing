// const express = require('express')
// const app = express()
// const port = 4200
// app.set('view engine', 'ejs');
// var bodyParser = require('body-parser')
 
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
// var User = require("./models/User/User.js");
var M = require("./service/main.js");
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

allRides = {};

allUsers = {};

var Main = new M();


// app.use('/', require('./routes/user'));
// app.use('/', require('./routes/ride'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


console.log("Adding users and vehicles");

Main.addUser("Shashank", 'M', "29");
Main.addVehicle("Shashank", "Baleno", "TS-05-62395");

Main.addUser("Rohan", 'M', 36);
Main.addVehicle("Rohan", "Swift", "KA-01-12345");

Main.addUser("Nandini", 'F', 29);

Main.addUser("Shipra", 'F', 27);
Main.addVehicle("Shipra", "Polo", "KA-05-41491");
Main.addVehicle("Shipra", "Activa", "KA-12-12332");

Main.addUser("Gaurav", 'M', 29);

Main.addUser("Rahul", 'M', 35);
Main.addVehicle("Rahul", "XUV", "KA-05-1234");

for (const [_, user] of Object.entries(allUsers)) {
  console.log(user.getName() + " gender " + user.getGender() + " age " + user.getAge());
  for(const [_, vehicle] of Object.entries(user.getVehicle())) {
    console.log(vehicle.getRegNo() + " " + vehicle.getCarName());
  }
}

console.log("Offering rides");

Main.offerRide("Rohan", "Hyderabad", 1, "Swift", "KA-01-12345", "Bangalore");
Main.offerRide("Shipra", "Bangalore", 1, "Activa", "KA-12-12332", "Mysore");
Main.offerRide("Shipra", "Bangalore", 2, "Polo", "KA-05-41491", "Mysore");
Main.offerRide("Shashank", "Hyderabad", 2, "Baleno", "TS-05-62395", "Bangalore");
Main.offerRide("Rahul", "Hyderabad", 5, "XUV", "KA-05-1234", "Bangalore");
Main.offerRide("Rohan", "Bangalore", 1, "Swift", "KA-01-12345", "Pune");

for(const [_, ride] of Object.entries(allRides)) {
  console.log(ride.getOrigin() + " " + ride.getDestination() + " " + ride.getSeats() + " " + ride.getCarName() + " " + ride.getRegNo());
}

console.log("Selecting rides");

Main.selectRide("Nandini", "Bangalore", "Mysore", 1, "");
Main.selectRide("Gaurav", "Bangalore", "Mysore", 1, "Activa");
Main.selectRide("Rohan", "Mumbai", "Bangalore", 1, "Baleno");
Main.selectRide("Rohan", "Hyderabad", "Bangalore", 1, "Baleno");
Main.selectRide("Shashank", "Hyderabad", "Bangalore", 1, "Polo");


Main.endRide("Rohan", "Hyderabad", 1, "Swift", "KA-01-12345", "Bangalore");
Main.endRide("Shipra", "Bangalore", 1, "Activa", "KA-12-12332", "Mysore");
Main.endRide("Shipra", "Bangalore", 2, "Polo", "KA-05-41491", "Mysore");
Main.endRide("Shashank", "Hyderabad", 2, "Baleno", "TS-05-62395", "Bangalore");
Main.logRideStat();