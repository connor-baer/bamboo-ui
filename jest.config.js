module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testURL: 'http://localhost',
  coverageDirectory: './__coverage__',
  rootDir: '.',
  roots: ['src'],
  collectCoverageFrom: [
    'src/@(components|util|styles)/**/*.{js,jsx}',
    '!src/@(components|util|styles)/**/index.{js,jsx}',
    '!src/@(components|util|styles)/**/*.story.{js,jsx}',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest.fileTransformer.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
};
