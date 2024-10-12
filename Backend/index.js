const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});
