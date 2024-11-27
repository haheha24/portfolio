const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/", "<rootDir>/utils"],
  // Use jest-fixed-jsdom to make msw worker compatible due to lack of Node features in jest-environment-jsdom.
  // Alternately suggested to use Vitest (No Node.Js global issues and native ESM support)
  // testEnvironment: "jest-environment-jsdom"
  testEnvironment: "jest-fixed-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
