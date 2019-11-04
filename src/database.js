const mongoose = require('mongoose');

module.exports = class Database {
  constructor(connection){
    this.connection = connection;
    this.connected = false;

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    return mongoose.connect(this.connection);
  }
}
