const { paths } = require('./tsconfig.json').compilerOptions;

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
 preset: 'jest-preset-angular',
 setupFilesAfterEnv: ['./setup-jest.ts'],
};