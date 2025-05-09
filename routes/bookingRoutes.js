// routes/bookingRoutes.js
const express = require("express");
const { bookActivity, getMyBookings } = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/:activityId", authMiddleware, bookActivity);
router.get("/", authMiddleware, getMyBookings);

module.exports = router;
