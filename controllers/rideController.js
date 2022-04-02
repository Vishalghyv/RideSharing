// var User = require("../models/User/User.js");
const bcrypt = require("bcryptjs");
const M = require("../service/main.js");
var Main = new M();
const rideOfferView = (req, res) => {
    res.render("rideOfferView", {
    } );
}

const rideOfferAdd = (req, res) => {
    const { carName, regNo, origin, destination, seats } = req.body;
    const name = req.app.get("user").getName();
    if (!name || !carName || !regNo || !origin || !destination || !seats) {
      console.log("Fill empty fields");
      return;
    }

    if (!Main.offerRide(name, origin, seats, carName, regNo, destination)) {
        return res.render("rideOfferView", {
            carName,
            regNo,
            origin,
            destination,
            seats
        });
    }

    res.redirect("/dashboard");
  };

const rideSelectView = (req, res) => {
    res.render("rideSelectView", {
    } );
}

const rideSelectAdd = (req, res) => {
    const { origin, destination, seats, args } = req.body;
    const name = req.app.get("user").getName();
    if (!name || !origin || !destination || !seats) {
      console.log("Fill empty fields");
      return;
    }

    if (!Main.selectRide(name, origin, destination, seats, args)) {
        return res.render("rideSelectView", {
            origin,
            destination,
            seats,
            args
        });
    }
    
    res.redirect("/dashboard");
  };

const endRideView = (req, res) => {
    res.render("endRideView", {});
};

const endRideAdd = (req, res) => {
    const { regNo } = req.body;
    const name = req.app.get("user").getName();
    if (!regNo) {
        console.log("Fill empty fields");
        return;
    }

    if (!Main.endRideMain(name, regNo)) {
        return res.render("endRideView", {
            regNo
        });
    }

    res.redirect("/dashboard");
}
  


module.exports =  {
    rideOfferView,
    rideSelectView,
    rideOfferAdd,
    rideSelectAdd,
    endRideView,
    endRideAdd
};   