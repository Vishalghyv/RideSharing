const {Ride} = require('../ride/ride');

function User(name, gender, age) {
    var user = {};
    
    user.name = name;
    user.gender = gender;
    user.age = age;
    user.ride = [];
    user.vehicle = [];

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
        user.ride.push(new Ride(user.name, carName, regNo, origin, destination, seats));
        allRides.addRide(user.name, user.ride[user.ride.length - 1]);
    }

    this.addVehicle = function(carName, regNo) {
        user.vehicle.push(new Vehicle(user.name, carName, regNo));
    }
}

module.exports = {
    User
};