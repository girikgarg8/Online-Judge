const NotFoundError = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const { title, description, difficulty, testCases, editorial } =
        problemData;
      const problem = await Problem.create({
        title,
        description,
        difficulty,
        testCases: testCases || [],
        editorial: editorial || "",
      });
      return problem;
    } catch (error) {
      console.error("Error while creating problem in repository layer", error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.error(
        "Error while fetching all problems in repository layer",
        error
      );
      throw error;
    }
  }

  async getProblemByID(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFoundError("Problem", id);
      }
      return problem;
    } catch (error) {
      console.error(
        "Error while fetching problem by ID in repository layer",
        error
      );
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const response = await Problem.findByIdAndDelete(id);
      if (!response) {
        throw new NotFoundError("Problem", id);
      }
      return response;
    } catch (error) {
      console.error(
        "Error while deleting the problem in repository layer",
        error
      );
      throw error;
    }
  }

  async updateProblem(id, update) {
    try {
      const response = await Problem.findByIdAndUpdate(id, update, {
        new: true,
      });
      if (!response) {
        throw new NotFoundError("Problem", id);
      }
      return response;
    } catch (error) {
      console.error(
        "Error while updating the problem in repository layer",
        error
      );
      throw error;
    }
  }
}

module.exports = ProblemRepository;
