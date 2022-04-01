const {Ride} = require('../ride/ride');

function User(name, gender, age) {
    var user = {};
    
    user.name = name;
    user.gender = gender;
    user.age = age;
    user.ride = [];
    user.vehicle = {};
    user.offered = 0;
    user.taken = 0;

    this.getName = function() {
        return user.name;
    }

    this.getGender = function() {
        return user.gender;
    }

    this.getAge = function() {
        return user.age;
    }

    this.offerRide = function(carName, regNo, origin, destination, seats) {
        if (user.vehicle[regNo].booked) {
            return false;
        }
        user.ride.push(new Ride(user.name, carName, regNo, origin, destination, seats));
        allRides.addRide(regNo, user.ride[user.ride.length - 1]);
        user.vehicle[regNo].booked = true;
        user.offered++;
        return true;
    }

    this.addVehicle = function(carName, regNo) {
        user.vehicle[regNo] = new Vehicle(user.name, carName, regNo);
    }

    this.selectRides = function(origin, destination, seats, args) {
        var rides = [];
        for(const ride of allRides) {
            if (ride.getOrigin() == origin && ride.getDestination() == destination && ride.getSeats() >= seats) {
                rides.push(ride);
            }
        }

        if (rides.length == 0) {
            return rides;
        }

        rides.sort(function(a, b) {
            return b.getSeats() - a.getSeats();
        });

        if (args == "Most Vacant") { 
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

        return [];        
    }

}

module.exports = {
    User
};