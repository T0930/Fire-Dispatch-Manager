const mongoose = require('mongoose');

// *************************************************
// update line 6 endpoint to reflect our project name
// *************************************************
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;