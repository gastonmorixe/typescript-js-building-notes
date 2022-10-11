module.exports = {
  env: {
    browser: true,
    // es2021: true,
    es2017: true,
    node: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: "es2017",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "prettier",
      ],
      parserOptions: {
        // ecmaVersion: "latest",
        // sourceType: "module",
        // tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {},
}
