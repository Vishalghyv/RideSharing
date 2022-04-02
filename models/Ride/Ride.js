function Ride(driverName, carName, regNo, origin, destination, seats) {
    var ride = {};

    ride.driverName = driverName;
    ride.carName = carName;
    ride.regNo = regNo;
    ride.origin = origin;
    ride.destination = destination;
    ride.seats = seats;

    this.getDriverName = function() {
        return ride.driverName;
    }

    this.getCarName = function() {
        return ride.carName;
    }

    this.getRegNo = function() {
        return ride.regNo;
    }

    this.getOrigin = function() {
        return ride.origin;
    }

    this.getDestination = function() {
        return ride.destination;
    }

    this.getSeats = function() {
        return ride.seats;
    }

    this.changeSeats = function(newSeats) {
        ride.seats = newSeats;
    }
}

module.exports = {
    Ride
};