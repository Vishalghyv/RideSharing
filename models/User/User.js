const {Ride} = require('../Ride/Ride');
const {Vehicle} = require('../Vehicle/Vehicle');

function User(name, gender, age, password) {
    var user = {};
    
    user.name = name;
    user.gender = gender;
    user.age = age;
    user.vehicle = {};
    user.offered = 0;
    user.taken = 0;
    user.password = password;

    this.getName = function() {
        return user.name;
    }

    this.getGender = function() {
        return user.gender;
    }

    this.getAge = function() {
        return user.age;
    }

    this.getVehicle = function() {
        return user.vehicle;
    }

    this.getPassword = function() {
        return user.password;
    }

    this.getTaken = function() {
        return user.taken;
    }

    this.getOffered = function() {
        return user.offered;
    }


    this.offerRide = function(carName, regNo, origin, destination, seats) {
        if (typeof user.vehicle[regNo] === "undefined" || user.vehicle[regNo].booked || user.vehicle[regNo].getCarName() !== carName) {
            return false;
        }

        allRides[regNo] = new Ride(user.name, carName, regNo, origin, destination, seats);
        user.vehicle[regNo].booked = true;
        user.offered++;
        return true;
    }

    this.addVehicle = function(carName, regNo) {
        if (typeof user.vehicle[regNo] !== "undefined") {
            return;
        }
        user.vehicle[regNo] = new Vehicle(user.name, carName, regNo);
    }

    this.selectRides = function(origin, destination, seats, args) {
        var rides = [];
        for (const [a, ride] of Object.entries(allRides)) {
            if (ride.getOrigin() == origin && ride.getDestination() == destination && ride.getSeats() >= seats) {
                rides.push(ride);
            }
        }

        if (rides.length == 0) {
            return false;
        }

        rides.sort(function(a, b) {
            return b.getSeats() - a.getSeats();
        });

        if (args == "") { 
            user.taken++;
            allRides[rides[0].getRegNo()].changeSeats(rides[0].getSeats() - seats);
            return rides[0];
        }

        for(const ride of rides) {
            if (ride.getCarName() == args) {
                user.taken++;
                allRides[ride.getRegNo()].changeSeats(ride.getSeats() - seats);
                return ride;
            }
        }

        return false;        
    }

}

module.exports = User;