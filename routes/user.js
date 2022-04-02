const express = require('express');
const {
    dashboardView,
    registerUser,
    registerView,
    loginView,
    loginUser,
    vehicleView,
    vehicleAdd,
    printRideStatView
} = require('../controllers/userController');

const router = express.Router();

router.get("/dashboard", dashboardView);
router.get('/register', registerView);
router.get('/login', loginView);
router.get('/vehicle', vehicleView);
router.get('/rideStat', printRideStatView);


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/vehicle', vehicleAdd);

module.exports = router;