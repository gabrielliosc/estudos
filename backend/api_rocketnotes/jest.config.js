module.exports = {
  bail: true, //Se um falhar os outros testes não são feitos
  coverageProvider: "v8",
  testMatch: [
    "<rootDir>/src/**/*.spec.js"
  ]
}
