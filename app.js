const express = require("express");
const mysql = require("mysql");

const portApp = 5000;

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/views"));
app.use("/uploads", express.static("uploads"));

const con = mysql.createConnection({
  host: "195.14.105.18",
  user: "hacketon",
  password: ".alXm0id(Tl0HiA_",
  database: "hacketoncda",
});

con.connect(function (err) {
  if (err) return console.log(err);
  else {
    return console.log("Connecté à la base de données MySQL!");
  }
});

app.get("/", function (req, res) {
  con.query("SELECT * FROM hacketon", function (err, result) {
    if (err) throw err;
    console.log(result);
    return res.render("pages/Dashboard", { title: "Dashboard", data: result });
  });
});

app.get("/forms", function (req, res) {
  return res.render("pages/Forms");
});

app.get("/data/forms", function (req, res) {
  console.log(req.query);
  con.query(
    `INSERT IGNORE INTO hacketon (id, module, temp, vitesse) VALUES (" ", "${
      req.query.module
    }", "${Math.floor(Math.random() * 100)}", "${Math.floor(
      Math.random() * 100
    )}")`
  ),
    function (err, result) {
      if (err) throw err;
    };
  res.render("pages/Forms");
});

app.listen(portApp, () =>
  console.log("Le serveur est lancer sur le port" + " " + portApp)
);
