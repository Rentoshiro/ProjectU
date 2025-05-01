module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-scss"],

  rules: {
    "string-quotes": "single",
    indentation: 2,
    "scss/dollar-variable-pattern": "^foo",
    "scss/percent-placeholder-pattern": "^bar",
  },
};
