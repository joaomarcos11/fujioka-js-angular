const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const VynilDiscSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
});

VynilDiscSchema.plugin(mongoosePaginate);

mongoose.model('VynilDisc', VynilDiscSchema);