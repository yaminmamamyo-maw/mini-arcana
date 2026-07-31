const express = require("express");

const router = express.Router();

const {
    createReading,
    getReadings
} = require("../controllers/readingControllers");

router.post(
    "/",
    createReading
);

router.get(
    "/",
    getReadings
);

module.exports = router;