const express = require('express');
const os = require('os');
const MongoClient = require('mongodb').MongoClient;

requre('NewsController');

const app = express();

app.use(express.static('dist'));

app.listen(8080, () => console.log('Listening on port 8080!'));

// app.get('/about', function (req, res) {
//     res.send('root')
//   })

let db;
MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
  if (err) return console.log(err);
  db = client.db('news');
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});


app.get('/api/news', (req, res) => {
  News.find({})
    .then((eachOne) => {
      res.json(eachOne);
    });
});
