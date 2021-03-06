var User = require("../models/User/User.js");


function Main() {
    // Adds user in memory database
    this.addUser = function (name, gender, age, password ="123") {
        if (typeof allUsers[name] !== "undefined") {
            console.log("Username exists, please use different username");
            return false;
        }
        const newUser = new User(name, gender, age, password);
        allUsers[name] = newUser;
        return true;
    }

    // Adds vehicle with Car name and registration no to user
    this.addVehicle = function(name, carName, regNo) {
        if (typeof allUsers[name] === "undefined") {
            console.log("Username doesn't exists, please login");
            return false;
        }

        var currUser = allUsers[name];        
        if (typeof currUser.getVehicle()[regNo] !== "undefined") {
            console.log("Vehicle with registration number " + regNo + " already exists");
            return false;
        }

        console.log("Vehicle added successfully with registration number " + regNo);
        currUser.addVehicle(carName, regNo);
        return true;
    }


    // Logs all users ride stats
    this.logRideStat = function() {
        for (const [_, user] of Object.entries(allUsers)) {
            console.log(user.getName() + ": " + user.getTaken() + " Taken,  " + user.getOffered() + " Offered");
        }
    }

    // Adds ride for a user
    this.offerRide = function(name, origin, seats, carName, regNo, destination) {
        if (typeof allUsers[name] === "undefined") {
            console.log("Username doesn't exists, please use correct username");
            return false;
        } 
        var currUser = allUsers[name];
        if (typeof currUser.getVehicle()[regNo] === "undefined" || currUser.getVehicle()[regNo].booked) {
            console.log("Vehicle with registration number " + regNo + " not available");
            return false;
        }

        if (!currUser.offerRide(carName, regNo, origin, destination, seats)) {
            console.log("Ride with registration number " + regNo + " already exists");
            return false;
        }

        console.log("Ride offered successfully");
        return true;
    }

    // Select ride for a user with origin, destination and seats
    // Args is an optional parameter:
    //     1. If args is not passed, then ride with max seats is selected
    //     2. If args is passed, then ride with with given car name is selected
    this.selectRide = function(name, origin, destination, seats, args='') {
        if (typeof allUsers[name] === "undefined") {
            console.log("Username doesn't exists, please use correct username");
            return false;
        } 
        var currUser = allUsers[name];
        var ride = currUser.selectRides(origin, destination, seats, args);

        if (ride === false) {
            console.log("No ride available");
            return ride;
        }

        console.log("Ride selected is: " + ride.getRegNo() + " " + ride.getCarName() + " " + ride.getOrigin() + " " + ride.getDestination());
        return true;
    }

    // Ends a ride for a user
    this.endRideMain = function(name, regNo) {
        if (typeof allUsers[name] === "undefined") {
            console.log("Username doesn't exists, please use correct username");
            return false;
        } 
        var currUser = allUsers[name];
        if (typeof currUser.getVehicle()[regNo] === "undefined" || typeof allRides[regNo] === "undefined") {
            console.log("Vehicle with registration number " + regNo + " not available");
            return false;
        }

        currUser.getVehicle()[regNo].booked = false;
        delete allRides[regNo];
        console.log("Ride ended successfully with registration number " + regNo);
        return true;
    }

    // Wrapper function for endRideMain
    this.endRide = function(name, origin, seats, carName, regNo, destination) {
        return this.endRideMain(name, regNo);
    }



}

module.exports = Main;