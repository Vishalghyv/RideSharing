const {Ride} = require('../models/ride/ride');


global.allRides = {};

allRides.addRide = function(driverName, ride) {
    allRides[driverName] = ride;
}