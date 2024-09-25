const express = require("express");
const { validateDocumentID } = require("../../validators");
const { problemController } = require("../../controllers");

const problemRouter = express.Router();

problemRouter.get("/:id", [validateDocumentID], problemController.getProblem);

problemRouter.get("/", problemController.getProblems);

problemRouter.post("/", problemController.addProblem);

problemRouter.delete(
  "/:id",
  [validateDocumentID],
  problemController.deleteProblem
);

problemRouter.put("/:id", problemController.updateProblem);

module.exports = problemRouter;
