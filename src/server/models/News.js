const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new mongoose.Schema({
  title: {type: 'String', required: true},
  author: {type: 'String', required: true},
  body:   {type: 'String', required: true},
  comments: [{ body: 'String', date: Date }],
  date: { type: 'Date', default: Date.now },
  cuid: { type: 'String', required: true },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;
