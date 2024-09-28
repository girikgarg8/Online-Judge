const { CosmosClient } = require("@azure/cosmos");
const {
  COSMOS_ENDPOINT,
  COSMOS_KEY,
  COSMOS_DATABASE_ID,
  COSMOS_CONTAINER_ID,
} = require("../config/server.config");

const client = new CosmosClient({ endpoint: COSMOS_ENDPOINT, key: COSMOS_KEY });
const database = client.database(COSMOS_DATABASE_ID);
const container = database.container(COSMOS_CONTAINER_ID);

// add to cosmos DB
async function logToCosmosDB(level, message) {
  try {
    // structure of the document we will store in cosmos DB
    const timestamp = new Date().toISOString();
    await container.items.create({ timestamp, level, message });
  } catch (err) {}
}

module.exports = { logToCosmosDB };
