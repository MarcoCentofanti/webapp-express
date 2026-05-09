const express = require(`express`);
const router = express.Router();

router.get("/", (req, res) => {
  res.send("lista film - Index");
});

router.get("/:id", (req, res) => {
  res.send("dettagio film - show");
});

router.post("/", (req, res) => {
  res.send("Post");
});

module.exports = router;
