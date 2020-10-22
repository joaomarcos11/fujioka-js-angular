const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

CommentSchema.plugin(mongoosePaginate);

mongoose.model('Comment', CommentSchema);