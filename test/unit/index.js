// require all test files (files that ends with .spec.js)
const testsContext = require.context('../../src/app', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
