// controllers/bookingController.js
const Booking = require("../models/Booking");
const Activity = require("../models/Activity");

exports.bookActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.activityId);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }
    const booking = new Booking({
      user: req.user.userId,
      activity: req.params.activityId,
    });
    await booking.save();
    res.status(201).json({ message: "Activity booked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId }).populate("activity");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
