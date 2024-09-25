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
    console.error("Error while creating a problem in controller layer", error);
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblemByID(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the problem",
      data: problem,
      error: {},
    });
  } catch (error) {
    console.error("Error while fetching problem in controller layer", error);
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all problems",
      data: problems,
      error: {},
    });
  } catch (error) {
    console.error(
      "Error while fetching all problems in controller layer",
      error
    );
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
