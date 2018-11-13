const express = require("express");

// requre('NewsController');

const app = express();

app.use(express.static("dist"));

app.listen(8080, () => console.log("Listening on port 8080!"));

app.get("/", (req, res, next) => {});

// 


// app.get('/', (req, res) => {
//     res.send('');
// });
