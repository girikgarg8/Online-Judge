const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Service is alive" });
});

app.use("/api", apiRouter);

app.use(errorHandler); // the last middleware, if the controller throws any error, this middleware will take care of structuring it in JSON response format

app.listen(PORT, async () => {
  console.log(`Server started at PORT: ${PORT}`);
  await connectToDB();
  console.log('Successfully connected to DB');
});
