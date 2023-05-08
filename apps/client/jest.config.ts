import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    // "\\.(gif|ttf|eot|svg|png)$":
    // "<rootDir>/apps/client/src/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>jest-setup.ts"],
  verbose: true,
};

export default config;
