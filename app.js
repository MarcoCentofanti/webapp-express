const express = require(`express`);
const app = express();
const port = process.env.PORT;
const routerMovies = require("./routers/routerMovies");

const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

app.use(express.static("public"));

app.use("/", routerMovies);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.use(errorHandler);
app.use(notFound);
