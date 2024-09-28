const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const { errorHandler } = require("./utils");
const { connectToDB, logger, serverConfig } = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Service is alive" });
});

app.use("/api", apiRouter);

app.use(errorHandler); // the last middleware, if the controller throws any error, this middleware will take care of structuring it in JSON response format

app.listen(serverConfig.PORT, async () => {
  logger.info(`Server started at PORT: ${serverConfig.PORT}`);
  await connectToDB();
  logger.info("Successfully connected to DB");
});
