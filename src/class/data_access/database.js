const mongoose = require('mongoose');
const schema = require('./schema');

module.exports = class ClassDatabase {
  constructor() {
    return mongoose.model("classes", schema);
  }
}
