
//app.js(entry point)
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes.js");
const activityRoutes = require("./routes/activityRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes.js");
const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => res.send("Activity Booking API"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));