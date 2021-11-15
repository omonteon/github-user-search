module.exports = {
  moduleNameMapper: {
    "^/(.*)$": "/src/$1",
  },
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "^.+\\.svg$": "./fileTransformer.js",
  },
  globals: {
    NODE_ENV: "test",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules"],
  testPathIgnorePatterns: ["/cypress"],
};
