const User = require("../models/user/user");
const bcrypt = require("bcryptjs");

const rideOfferView = (req, res) => {
    res.render("rideOfferView", {
    } );
}

const rideOfferAdd = (req, res) => {
    const { name, carName, regNo, origin, destination, seats } = req.body;
    if (!name || !carName || !regNo || !origin || !destination || !seats) {
      console.log("Fill empty fields");
      return;
    }
    //Confirm Passwords
    if (!allUsers[name]) {
        console.log("Username doesn't exists, please use correct username");
    } else {
        var currUser = allUsers[name];
        if (!currUser.vehicle[regNo] && currUser.vehicle[regNo].booked) {
          console.log("Vehicle with registration number " + regNo + " not available");
          return;
        }
        currUser.offerRide(carName, regNo, origin, destination, seats);
    }
  };

const rideSelectView = (req, res) => {
    res.render("rideSelectView", {
    } );
}

const rideSelectAdd = (req, res) => {
    const { name, origin, destination, seats, args } = req.body;
    if (!name || !origin || !destination || !seats) {
      console.log("Fill empty fields");
      return;
    }

    if (!allUsers[name]) {
        console.log("Username doesn't exists, please use correct username");
    } else {
        var currUser = allUsers[name];
        if (args == "") {
            args = "Most Vacant";
        }
        var ride = currUser.selectRide(origin, destination, seats, args);

        if (ride == []) {
            console.log("No ride available");
            return;
        } else {
            console.log("Ride available is: " + ride.getRegNo() + " " + ride.getCarName() + " " + ride.getOrigin() + " " + ride.getDestination());
            res.render("rideelectView", {
                ride: ride
            });
        }
    }
  };

const endRideView = (req, res) => {
    res.render("endRideView", {});
};

const endRideAdd = (req, res) => {
    const { regNo } = req.body;
    if (!regNo) {
        console.log("Fill empty fields");
        return;
    }

    if (allRides.endRide(regNo)) {
        console.log("Ride with registration number " + regNo + " ended successfully");
    } else {
        console.log("Ride with registration number " + regNo + " not found");
    }
}
  


module.exports =  {
    rideOfferView,
    rideSelectView,
    rideOfferAdd,
    rideSelectAdd,
    endRideView,
    endRideAdd
};   