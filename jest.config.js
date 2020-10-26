// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const spec = {
  preset: 'react-native',
  displayName: 'spec',
  rootDir: path.join(__dirname, ''),
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [],
}

const test = spec

module.exports = test
