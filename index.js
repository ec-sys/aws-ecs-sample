const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  console.log("Hello Root!!");
  res.json('Hello World!');
})

app.listen(port, () => {
  console.log(`App started on port ${port}`);
})
