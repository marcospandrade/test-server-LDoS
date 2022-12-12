const express = require("express");
const app = express();

const PORT = 3000;

app.use(require("express-status-monitor")());

app.get("/", (req, res) => {
  setTimeout(() => {
    console.log("Hello");
    res.send("Hello, world!");
  }, 500);
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
