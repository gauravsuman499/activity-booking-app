// routes/activityRoutes.js
const express = require("express");
const { getAllActivities, createActivity } = require("../controllers/activityController");
const router = express.Router();

router.post("/", createActivity);
router.get("/", getAllActivities);

module.exports = router;


