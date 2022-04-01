const User = require("../models/user/user");
const bcrypt = require("bcryptjs");

const rideOfferView = (req, res) => {
    res.render("register", {
    } );
}
// For View 
const rideSelectView = (req, res) => {

    res.render("login", {
    } );
}

//For Register Page
const registerView = (req, res) => {
    res.render("register", {});
  };

const registerUser = (req, res) => {
    const { name, gender, age } = req.body;
    if (!name || !gender || !age) {
      console.log("Fill empty fields");
      return;
    }
    //Confirm Passwords
    if (allUsers[name]) {
        console.log("Username exists, please use different username");
    } else {
        var newUser = new User(name, gender, age);
        allUsers.addUser(name, newUser);
        console.log("User with username " + name + " added successfully");
    }
  };

//For Vehicle Page
const vehicleView = (req, res) => {
  res.render("register", {});
};

const vehicleAdd = (req, res) => {
  const { name, carName, regNo } = req.body;
  if (!name || !carName || !regNo) {
    console.log("Fill empty fields");
    return;
  }
  //Confirm Passwords
  if (!allUsers[name]) {
      console.log("Username doesn't exists, please use correct username");
  } else {
      var currUser = allUsers[name];
      if (currUser.vehicle[regNo]) {
        console.log("Vehicle with registration number " + regNo + " already exists");
        return;
      }
      currUser.addVehicle(carName, regNo);
  }
};

const printRideStatView = (req, res) => {
  res.render("register", {
    users: allUsers
  });
};



module.exports =  {
    rideOfferView,
    rideSelectView,
    registerUser,
    registerView,
    vehicleView,
    vehicleAdd,
    printRideStatView
};   