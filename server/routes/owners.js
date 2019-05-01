var express = require("express");
var router = express.Router();
const SqlRunner = require("../db/sql_runner");

router.put("/:owner_id", function(req, res) {
  SqlRunner.run(
    "UPDATE owners SET adoption_id=$1 WHERE id=$2",
    [req.body.adopted_id, req.params.owner_id]
  ).then(result => {
    SqlRunner.run("SELECT * FROM animals ORDER BY name ASC").then(result => {
      res.status(201).json(result.rows);
    });
  });
});

module.exports = router;
