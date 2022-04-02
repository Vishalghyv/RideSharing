# RideSharing

## Introduction
Implements a simple ride sharing system with description given in the [project description](https://tinyurl.com/backend-assign-intern)

## Implementation

App follows MVC model.
Where there are three Models:
User, Ride, Vehicle

Main class in service folders implements all the main function such as:
- User registration (addUser)
- Add vehicle (addVehicle)
- Offer a ride (offerRide)
- Select a ride (selectRide)
- End a ride (endRide)

Application can run using command
    `npm start`
Which can be viewed on port: 4200

App also implements basic login feature(without bcrypt and passport) so as to allow user to their vehicle and ride.

Tests can be run using the command
    `npm test`
Whose results can be viewed on the console.