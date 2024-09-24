const { sanitizeMarkdownContent } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // Sanitize the problem description
    try {
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );
      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.error("Error while creating problem in service layer", error);
      throw error;
    }
  }
}

module.exports = ProblemService;
