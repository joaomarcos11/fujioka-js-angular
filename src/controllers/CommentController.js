const mongoose = require('mongoose');

const Comment = mongoose.model('Comment');

module.exports = {
  async index(req, res) {
    const { page = 1} = req.query;
    const comments = await Comment.paginate({}, { page, limit: 10});
  
    return res.json(comments);
  },

  async show(req, res) {
    const comment = await Comment.findById(req.params.id);

    return res.json(comment);
  },

  async store(req, res) {
    const comment = await Comment.create(req.body);

    return res.json(comment);
  },

  async update(req, res) {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
    return res.json(comment);
  },

  async destroy(req, res) {
    await Comment.findByIdAndRemove(req.params.id);

    res.send();
  }
}