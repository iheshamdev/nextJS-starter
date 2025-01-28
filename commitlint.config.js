module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Ensures there's a blank line between header and body
    "body-leading-blank": [1, "always"],
    // Limits the body line length to 100 characters
    "body-max-line-length": [2, "always", 100],
    // Ensures there's a blank line between body and footer
    "footer-leading-blank": [1, "always"],
    // Limits the footer line length to 100 characters
    "footer-max-line-length": [2, "always", 100],
    // Limits the header (first line) length to 100 characters
    "header-max-length": [2, "always", 100],
    // Enforces subject case - disallows sentence-case, start-case, pascal-case, and upper-case
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    // Ensures the subject is not empty
    "subject-empty": [2, "never"],
    // Prevents a period at the end of the subject
    "subject-full-stop": [2, "never", "."],
    // Enforces lowercase for the type (e.g., feat, fix)
    "type-case": [2, "always", "lower-case"],
    // Ensures the type is not empty
    "type-empty": [2, "never"],
    // Defines the allowed commit types
    "type-enum": [
      2,
      "always",
      [
        "build", // Changes that affect the build system or external dependencies
        "chore", // Regular maintenance tasks and minor updates
        "ci", // Changes to CI configuration files and scripts
        "docs", // Documentation only changes
        "feat", // A new feature
        "fix", // A bug fix
        "perf", // A code change that improves performance
        "refactor", // A code change that neither fixes a bug nor adds a feature
        "revert", // Reverts a previous commit
        "style", // Changes that don't affect the meaning of the code (formatting)
        "test", // Adding missing tests or correcting existing tests
      ],
    ],
  },
};
