module.exports = {
  parser: "@typescript-eslint/parser",
  // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
