module.exports = require('@sumup/foundry/eslint')(
  {
    language: 'TypeScript',
    environments: ['Browser'],
    frameworks: ['React', 'Jest', 'Testing Library'],
    openSource: false,
  },
  {
    parserOptions: {
      project: './tsconfig.eslint.json',
      tsconfigRootDir: __dirname,
    },
  },
);
