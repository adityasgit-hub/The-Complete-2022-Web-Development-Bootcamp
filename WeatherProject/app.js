const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "";
  https.get(url, function(response) {
    console.log(response);
  });

  res.send("Server is up and running.");
})






app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
