const express = require('express');
const {
    rideOfferView,
    rideSelectView,
    endRideView,
    rideOfferAdd,
    rideSelectAdd,
    endRideAdd
} = require('../controllers/rideController');
const router = express.Router();

router.get('/offer', rideOfferView);
router.get('/select', rideSelectView);
router.get('/endRide', endRideView);

router.post('/offer', rideOfferAdd);
router.post('/select', rideSelectAdd);
router.post('/endRide', endRideAdd);

module.exports = router;