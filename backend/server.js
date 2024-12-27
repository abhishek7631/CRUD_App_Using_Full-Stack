const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
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

app.post("/create", (req, res) => {
  const q = "insert into student (`Name`,`Email`,`Age`,`Status`) values (?)";
  const values = [req.body.name, req.body.email, req.body.age, req.body.status];

  db.query(q, [values], (err, result) => {
    if (err) return res.json("Error");
    return res.json(result);
  });
});

app.put("/update/:id", (req, res) => {
  const q =
    "update student set `Name`=?, `Email`=? ,`Age`=? ,`Status`=? where id = ?";
  const values = [req.body.name, req.body.email, req.body.age, req.body.status];

  const id = req.params.id;

  db.query(q, [...values, id], (err, result) => {
    if (err) return res.json("Error");
    return res.json(result);
  });
});

app.delete("/student/:id", (req, res) => {
  const q = "delete from student where id =?";

  const id = req.params.id;

  db.query(q, [id], (err, result) => {
    if (err) return res.json("Error");
    return res.json(result);
  });
});

app.listen(8181, () => {
  console.log("server is listining on port 8080");
});

//extra code
//extra code
//extra code
