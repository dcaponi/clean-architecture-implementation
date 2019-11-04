const mongoose = require('mongoose');
const StudentSchema = require('../../student/data_access/schema');

module.exports = new mongoose.Schema({
  name:     { type: String },
  level:    { type: String },
  students: [ StudentSchema ]
});
