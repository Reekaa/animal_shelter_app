var express = require("express");
var router = express.Router();
const SqlRunner = require("../db/sql_runner");

router.get("/", function(req, res) {
  SqlRunner.run("SELECT * FROM animals").then(result => {
    res.status(200).json(result.rows);
  });
});

router.get("/search", function(req, res) {
  const keys = Object.keys(req.query);
  const searchKey = keys[0];
  console.log(searchKey);
  console.log(req.query[searchKey]);
  SqlRunner.run(`SELECT * FROM animals WHERE ${searchKey}=$1`,
  [req.query[searchKey]]).then(result => {
      res.status(200).json(result.rows);
    });
});

router.post("/", function(req, res) {
  SqlRunner.run(
    "INSERT INTO animals (name, image_url, type, breed, age, gender, adopted) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [req.body.name, req.body.image_url, req.body.type, req.body.breed, req.body.age, req.body.gender, req.body.adopted]
  ).then(result => {
    SqlRunner.run("SELECT * FROM animals ORDER BY name ASC").then(result => {
      res.status(201).json(result.rows);
    });
  });
});

router.put("/:id", function(req, res) {
  SqlRunner.run(
    "UPDATE animals SET name=$1, image_url=$2, type=$3, breed=$4, age=$5, gender=$6, adopted=$7 WHERE id=$8",
    [req.body.name, req.body.image_url, req.body.type, req.body.breed, req.body.age, req.body.gender, req.body.adopted, req.params.id]
  ).then(result => {
    SqlRunner.run("SELECT * FROM animals ORDER BY name ASC").then(result => {
      res.status(201).json(result.rows);
    });
  });
});

router.delete('/:id', function(req, res) {
  SqlRunner.run(
    "DELETE FROM animals WHERE id = $1",
     [req.params.id]
   ).then(result => {
    SqlRunner.run("SELECT * FROM animals ORDER BY name ASC").then(result => {
      res.status(201).json(result.rows);
    });
  });
});

module.exports = router;
