const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json("SCA Cloud School Week 5: CI/CD Tools - Jenkins, CircleCI, Travis");
});

module.exports = app.listen(process.env.PORT || 4000, () =>
  console.log(`Running on http://localhost:4000`)
);