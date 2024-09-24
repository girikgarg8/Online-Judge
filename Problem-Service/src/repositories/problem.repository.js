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
}

module.exports = ProblemRepository;
