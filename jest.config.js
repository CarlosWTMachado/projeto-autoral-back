/* eslint-disable */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	extensionsToTreatAsEsm: ['.ts'],
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	collectCoverage: true,
	coveragePathIgnorePatterns: [
		'node_modules',
		'interfaces',
		'repositories',
		'<rootDir>/src/repositories',
		'<rootDir>/src/utils',
		'<rootDir>/src/middlewares',
		'<rootDir>/src/schemas',
		'<rootDir>/src/database.ts',
		'<rootDir>/src/errors',
		'<rootDir>/tests/factories',
		'<rootDir>/src/app.ts',
	]
};