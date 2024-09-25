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
      console.error("Error while fetching all problems in repository layer");
      throw error;
    }
  }
}

module.exports = ProblemRepository;
