const BadRequest = require("../errors/badRequest.error");

function validateDocumentID(req, res, next) {
  const documentID = req.params.id;
  if (documentID.length !== 24) {
    throw new BadRequest(
      "documentID",
      "Input must be a 24 character hex string"
    );
  }
  next();
}

module.exports = validateDocumentID;