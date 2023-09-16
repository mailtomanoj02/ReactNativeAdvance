module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'], // Add 'prettier' to the plugins array.
  // Add the 'prettier' rule to your ESLint configuration.
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'error', // Enforce Prettier formatting.
      },
    },
  ],
};
