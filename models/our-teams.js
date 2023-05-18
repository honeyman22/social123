const mongoose = require("mongoose");

const OurTeamsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  profileImage: { type: File, required: true },
  position: { type: String, required: true },
});

const OurTeamsModal = mongoose.model("OurTeams", OurTeamsSchema);
module.exports = OurTeamsModal;
