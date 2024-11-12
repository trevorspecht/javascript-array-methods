let testRegex = ['(/__tests__/.*|\\.test)\\.[jt]sx?$'];
let testPathIgnorePatterns = ['/node_modules'];
let modulePathIgnorePatterns = [];

module.exports = {
  preset: 'ts-jest',
  automock: false,
  testRegex,
  testPathIgnorePatterns,
  modulePathIgnorePatterns,
  moduleFileExtensions: ['ts', 'js'],
  clearMocks: true,
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  roots: ['<rootDir>']
};
