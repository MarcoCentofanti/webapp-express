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
  const sqlReviews =
    "SELECT * FROM reviews JOIN  movies ON movie_id = movies.id WHERE movies.id = ?";

  connection.query(sql, [id], (err, movieResult) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (movieResult.lenght === 0)
      return res.status(404).json({ error: 404, message: "Film not found" });

    const movie = movieResult[0];

    connection.query(sqlReviews, [id], (err, reviewsResult) => {
      if (err) return res.status(500).json({ error: "Data query failed" });
      movie.reviews = reviewsResult;
      res.json(movieResult);
    });
  });
}

function post(req, res) {}

module.exports = { index, show, post };
