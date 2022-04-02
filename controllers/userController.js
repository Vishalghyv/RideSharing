var User = require("../models/User/User.js");
const M = require("../service/main.js");
var Main = new M();

const dashboardView = (req, res) => {

  res.render("dashboard", {
    user: req.app.get("user")
  });
};

//For Register Page
const registerView = (req, res) => {
    res.render("register", {});
  };

const registerUser = (req, res) => {
    const { name, gender, age, password} = req.body;
    if (!name || !gender || !age || !password) {
      console.log("Fill empty fields");
      return;
    }

    if (!Main.addUser(name, gender, age, password)) {
        return res.render("register", {
          name,
          gender,
          age,
          password
        });
    } 
    res.redirect("/login");
  };

//For Vehicle Page
const vehicleView = (req, res) => {
  res.render("vehicleView", {});
};

const vehicleAdd = (req, res) => {
  const { carName, regNo } = req.body;
  const name = req.app.get("user").getName();
  if (!name || !carName || !regNo) {
    console.log("Fill empty fields");
    return;
  }

  if (!Main.addVehicle(name, regNo, carName)) {
    return res.render("vehicleView", {
      carName,
      regNo,
    });
  }

  res.redirect("/dashboard");
};

const printRideStatView = (req, res) => {
  res.render("printRideStatView", {
    users: allUsers
  });
};

// For Login page
const loginView = (req, res) => {
  res.render("login", {});
};

const loginUser = (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    console.log("Please fill in all the fields");
    res.render("login", {
      name,
      password,
    });
  } else {
    if (typeof allUsers[name] === "undefined") {
      console.log("Username doesn't exists, please use correct username");
      res.render("login", {
        name,
        password,
      });
    }
    
    console.log(allUsers[name].getPassword());
    if (allUsers[name].getPassword() !== password) {
      console.log("Password doesn't match");
      return res.render("login", {
        name,
        password,
      });
    }

    req.app.set("user", allUsers[name]);
    res.redirect("/dashboard");
  }
};



module.exports =  {
    dashboardView,
    registerView,
    registerUser,
    loginView,
    loginUser,
    vehicleView,
    vehicleAdd,
    printRideStatView
};   