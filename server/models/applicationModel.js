// Mongoose was connected to the pursuitDB in server.js
const mongoose = require('mongoose');

const { Schema } = mongoose;

const applicationSchema = new Schema({
  companyName: { type: String, required: true },
  positionTitle: { type: String, required: true },
  dateApplied: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Application', applicationSchema);
