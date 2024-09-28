const mongoose = require("mongoose");

const { PROBLEMS_ATLAS_DB_URL, NODE_ENV } = require("./server.config");
const logger = require("./logger.config");

async function connectToDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(PROBLEMS_ATLAS_DB_URL);
    }
  } catch (error) {
    logger.error("Unable to connect to the DB server", error);
  }
}

module.exports = connectToDB;
