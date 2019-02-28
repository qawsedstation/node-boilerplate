module.exports = {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(test|spec)",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
     "globals": {
      "ts-jest": {
        "tsConfigFile": "tsconfig.json"
      }
    },
  }