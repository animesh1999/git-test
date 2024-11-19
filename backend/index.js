const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello backend");
});

app.listen(4600);

//MY BRANCH 2
//MYOTHERBRANCH 2
