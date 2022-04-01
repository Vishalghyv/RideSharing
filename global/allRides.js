global.allRides = {};

allRides.addRide = function(regNo, ride) {
    allRides[regNo] = ride;
}

allRides.endRide = function(regNo) {
    if (allRides[regNo] && allRides[regNo].getSeats()== 0) {
        delete allRides[regNo];
        return true;
    }

    return false;
}