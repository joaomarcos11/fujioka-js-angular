const mongoose = require('mongoose');

const VynilDisc = mongoose.model('VynilDisc');

module.exports = {
  async index(req, res) {
    const { page = 1} = req.query;
    const discs = await VynilDisc.paginate({}, { page, limit: 5});
  
    return res.json(discs);
  },

  async show(req, res) {
    const disc = await VynilDisc.findById(req.params.id);

    return res.json(disc);
  },

  async store(req, res) {
    const disc = await VynilDisc.create(req.body);

    return res.json(disc);
  },

  async update(req, res) {
    const disc = await VynilDisc.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
    return res.json(disc);
  },

  async destroy(req, res) {
    await VynilDisc.findByIdAndRemove(req.params.id);

    res.send();
  }
}