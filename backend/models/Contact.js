// backend/models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  address:   { type: String },
  email:     { type: String, required: true, unique: true },
  phone:     { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
