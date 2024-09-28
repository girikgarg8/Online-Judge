const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  PROBLEMS_ATLAS_DB_URL: process.env.PROBLEMS_ATLAS_DB_URL,
  LOGS_ATLAS_DB_URL: process.env.LOGS_ATLAS_DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
  COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
  COSMOS_KEY: process.env.COSMOS_KEY,
  COSMOS_DATABASE_ID: process.env.COSMOS_DATABASE_ID,
  COSMOS_CONTAINER_ID: process.env.COSMOS_CONTAINER_ID,
};
