const winston = require("winston");
const { combine, timestamp, printf, colorize, align } = winston.format;
require("winston-mongodb");
const { LOGS_ATLAS_DB_URL } = require("./server.config");
const { Writable } = require("stream");
const { logToCosmosDB } = require("../clientapis/cosmosClient");
const { extractDetailsFromLog } = require("../utils");

const customStream = new Writable({
  write(chunk, encoding, callback) {
    const chunkMessage = chunk.toString();
    const { message, level } = extractDetailsFromLog(chunkMessage);
    logToCosmosDB(level, message);
    callback();
  },
});

const customStreamTransport = new winston.transports.Stream({
  level: "error",
  stream: customStream,
});

const allowedTransports = [];

allowedTransports.push(customStreamTransport);

// The below transport configuration enables logging in console
allowedTransports.push(
  new winston.transports.Console({
    format: combine(
      colorize({ all: true }),
      timestamp({
        format: "YYYY-MM-DD hh:mm:ss A",
      }),
      align(),
      printf((log) => `[${log.timestamp}] ${log.level}: ${log.message}`)
    ),
  })
);

// The below transport configuration enables logging to MongoDB
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOGS_ATLAS_DB_URL,
    collection: "logs",
    tryReconnect: true,
  })
);

// The below transport configuration enables logging to file
allowedTransports.push(
  new winston.transports.File({
    level: "error",
    filename: "combined.log",
    format: combine(
      timestamp({
        format: "YYYY-MM-DD hh:mm:ss A",
      }),
      align(),
      printf((log) => `[${log.timestamp}] ${log.level}: ${log.message}`)
    ),
  })
);

const logger = winston.createLogger({
  transports: allowedTransports,
});

module.exports = logger;
