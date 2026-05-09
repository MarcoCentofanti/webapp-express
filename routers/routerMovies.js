const express = require(`express`);
const router = express.Router();
const controller = require("./../controllers/controllerMovies");

router.get("/", controller.index);

router.get("/:id", controller.show);

router.post("/", (req, res) => {
  res.send("Post");
});

module.exports = router;
