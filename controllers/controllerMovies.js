const connection = require("../data/db");

function index(req, res) {
  const sql = "SELECT * FROM movies ";
  connection.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(result);
  });
}

function show(req, res) {
  const id = req.params.id;
  const sql = "SELECT * FROM movies WHERE movies.id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (result.lenght === 0)
      return res.status(404).json({ error: 404, message: "Film not found" });
    res.json(result);
  });
}

function post(req, res) {}

module.exports = { index, show, post };
