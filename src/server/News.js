const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const NewsSchema = new mongoose.Schema({
  title: String,
  teaser: String,
  body: String,
  status: {
    type: Number,
    default: 1
  },
  created: {
    type: Date,
    required: true,
    default: new Date()
  }
});
const News = mongoose.model('News', newsSchema);
module.exports = News;
