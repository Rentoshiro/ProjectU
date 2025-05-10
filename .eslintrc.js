// .eslintrc.js

module.exports = {
  env: {
    browser: true,

    es2021: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",

    sourceType: "module",

    ecmaFeatures: { jsx: true },
  },

  settings: {
    react: { version: "detect" },
  },

  extends: [
    "airbnb",

    "plugin:@typescript-eslint/recommended",

    "plugin:react/recommended",

    "plugin:jsx-a11y/recommended",

    "plugin:i18next/recommended",

    "plugin:storybook/recommended",
  ],

  plugins: ["@typescript-eslint", "react", "jsx-a11y", "i18next"],

  rules: {
    // Force double quotes

    quotes: ["error", "double"],

    // Windows line endings

    "linebreak-style": ["error", "windows"],

    // JS/TS indent of 2 spaces

    indent: ["error", 2],

    // JSX children indent of 2 spaces

    "react/jsx-indent": ["error", 2],

    // JSX props indent of 2 spaces

    "react/jsx-indent-props": ["error", 2],

    // Allow .ts/.tsx files to contain JSX

    "react/jsx-filename-extension": [
      "error",

      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],

    // i18next: no literal strings in markup, with some attributes ignored

    "i18next/no-literal-string": [
      "error",

      {
        markupOnly: true,

        ignoreAttribute: ["data-testid", "to", "role", "className", "id"],
      },
    ],
  },

  globals: {
    __IS_DEV__: true,
  },
};

