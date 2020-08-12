require("dotenv").config();

const express = require("express");
const cors = require("cors");
const validator = require("mysql-validator");

const client = require("./client");
const db = require("./db/conection");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/departaments", (req, res) => {
  client
    .get(`${process.env.API_URL}/test/colombia.json`)
    .then((result) => {
      let data = Object.keys(result.data).map((departament) => {
        return {
          name: departament,
          cities: result.data[`${departament}`],
        };
      });
      res.status(200).json(data);
    })
    .catch((e) => res.send(e));
});

app.post("/signup", (req, res) => {
  const { email, name, state, city } = req.body;

  const types = {
    name: "varchar(50)",
    email: "varchar(30)",
    state: "varchar(30)",
    city: "varchar(50)",
  };

  let errors = [];

  for (key in req.body) {
    let err = validator.check(req.body[key], types[key]);
    if (err) errors.push({ name: key, error: err.message });
  }

  if (errors.length) res.status(400).json(errors);

  const query = `INSERT INTO ${process.env.DB_TABLE} (name, email, state, city) VALUES ("${name}", "${email}", "${state}", "${city}")`;

  db.getConnection((err, connection) => {
    if (err) res.status(400).json({ errorMessage: "Ocurrió un error" });
    else {
      connection.query(query, (err, result) => {
        if (err) res.status(400).json({ errorMessage: "Ocurrió un error" });
        else
          res.status(201).json({
            message: "Tu información ha sido recibida satisfactoriamente",
          });
      });
      connection.release();
    }
  });
});

app.listen(process.env.PORT || 80, () => {
  console.log(`Running`);
});
