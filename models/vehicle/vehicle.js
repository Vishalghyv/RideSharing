function Vehicle(ownerName, carName, carReg) {
    var vehicle = {};

    vehicle.ownerName = ownerName;
    vehicle.carName = carName;
    vehicle.carReg = carReg;
    vehicle.booked = false;

    this.getOwnerName = function() {
        return vehicle.ownerName;
    }

    this.getCarName = function() {
        return vehicle.carName;
    }

    this.getCarReg = function() {
        return vehicle.carReg;
    }
}

module.exports = {
    Vehicle
};
