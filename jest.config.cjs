module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    testEnvironment: "jsdom",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/.config/test/file-mapper.js",
      },
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    testRegex: "/src/.*.test.(ts|tsx)$",
    moduleDirectories: [
        "node_modules"
    ],
    coverageDirectory: "../coverage",
    coverageReporters: ["json", "lcov"]
}