const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('dist'));

app.listen(process.env.PORT || 5000);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});
