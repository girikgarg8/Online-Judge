const express = require("express");
const v1Routes = require("./v1");

const apiRouter = express.Router();

apiRouter.use("/v1", v1Routes);

module.exports = apiRouter;
