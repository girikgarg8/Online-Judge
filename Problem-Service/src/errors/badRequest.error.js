const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BadRequest extends BaseError {
  constructor(resourceName, details) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${resourceName}`,
      details
    );
  }
}

module.exports = BadRequest;
