const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
  try {
    const problem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created the problem",
      data: problem,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("getProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("getProblems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("deleteProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("updateProblem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
