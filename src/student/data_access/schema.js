const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  firstname: { type: String },
  lastname:  { type: String },
  email:     { type: String }
});
