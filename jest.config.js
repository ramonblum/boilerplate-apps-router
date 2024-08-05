module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  //testMatch: ['src/**/*.spec.ts(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.spec.ts(x)?'
    // '!src/app/**',
    // '!src/lib/registry.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
