const { markDownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // Sanitize the problem description
    try {
      problemData.description = markDownSanitizer.sanitizeMarkdownContent(
        problemData.description
      );
      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.error("Error while creating problem in service layer", error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();
      return problems;
    } catch (error) {
      console.error("Error while fetching all problems in service layer");
      throw error;
    }
  }
}

module.exports = ProblemService;
