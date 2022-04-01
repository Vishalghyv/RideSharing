const express = require('express');
const {rideOfferView, rideSelectView } = require('../controllers/rideController');
const router = express.Router();
router.get('/offer', rideOfferView);
router.get('/select', rideSelectView);
module.exports = router;