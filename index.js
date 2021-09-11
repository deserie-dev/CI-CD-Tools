const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

app.get('/', (req, res) => {
  res.status(200).json('SCA Cloud School Week 5: CI/CD Tools - Jenkins, CircleCI, TravisCI');
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});