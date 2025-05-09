// controllers/activityController.js
const Activity = require("../models/Activity");


// POST /api/activities
exports.createActivity = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    const activity = new Activity({
      title,
      description,
      location,
      date,
      time
    });

    await activity.save();

    res.status(201).json({
      message: 'Activity created successfully',
      activity
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


