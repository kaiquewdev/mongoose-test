var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = null;

schema = new Schema({
  body: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

module.exports = exports = mongoose.model('Comment', schema);
