module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "css"],
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:css/recommended",
    "prettier",
  ],
  rules: {
    "consistent-return": 2,
    indent: 0,
    "no-else-return": 1,
    semi: [1, "always"],
    "space-unary-ops": 2,
    "react/prop-types": 0,
    "@typescript-eslint/ban-ts-comment": "off",
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  root: true,
};
