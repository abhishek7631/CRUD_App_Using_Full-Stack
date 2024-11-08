const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  const q = "select * from student";
  db.query(q, (err, result) => {
    if (err) return res.json("Error");
    return res.json(result);
  });
});

app.listen(8181, () => {
  console.log("server is listining on port 8080");
});
