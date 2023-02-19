const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

let quotes = require("./quotes.json");
app.get("/", async function (req, res) {
  let x = Math.floor(Math.random() * quotes.length);
  await res.send(quotes[x]); // changed
});


app.listen(3002, function () {
  console.log("Server is listening on port 3002. Ready to accept requests!");
});
