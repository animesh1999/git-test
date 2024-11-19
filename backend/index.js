const express = require("express");
//this is other person branch change
const app = express();

app.get("/", (req, res) => {
  res.send("hello backend");
});

app.listen(4600);
