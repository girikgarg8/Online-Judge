const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  PROBLEMS_ATLAS_DB_URL: process.env.ATLAS_DB_URL,
  LOGS_ATLAS_DB_URL: process.env.LOGS_ATLAS_DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
};
