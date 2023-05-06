module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: [
        "plugin:testing-library/react",
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
      ],
    },
  ],
  parserOptions: {
    project: "/apps/**/tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "jest",
    "jest-dom",
    "promise",
    "testing-library",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
  },
  ignorePatterns: ["src/__mocks__/*"],
};
