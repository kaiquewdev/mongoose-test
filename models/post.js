var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = null;

schema = new Schema({
  title: { type: String, required: true, index: true },
  body: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

module.exports = exports = mongoose.model('Post', schema);
