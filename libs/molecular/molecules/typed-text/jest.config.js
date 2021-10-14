module.exports = {
  displayName: "molecular-molecules-typed-text",
  preset: "../../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../../coverage/libs/molecular/molecules/typed-text"
}
