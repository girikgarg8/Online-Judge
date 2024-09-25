const marked = require("marked");
const sanitizeHTMLLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();
  // Convert the markdown to HTML
  const convertedHTML = marked.parse(markdownContent);

  // Sanitize HTML
  const sanitizedHTML = sanitizeHTMLLibrary(convertedHTML, {
    allowedTags: sanitizeHTMLLibrary.defaults.allowedTags,
  });

  // Convert Sanitized HTML to Markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHTML);

  return sanitizedMarkdown;
}

module.exports = { sanitizeMarkdownContent };
