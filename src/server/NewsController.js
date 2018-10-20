const News = require('News');

module.exports = {
  find(params, callback) {
    News.find(params, '_id title teaser', (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  },

  findById(id, callback) {
    News.findById(id, (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
};
