export default {
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: [
    "**/__tests__/**/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  testTimeout: 10000,
};
