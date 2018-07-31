module.exports = {
  "extends": "airbnb-base",
  "env": {
    "mocha": true
  },
  overrides: [{
    files: "*.test.js",
    rules: {
      "no-unused-expressions": "off",
    }
  }],
  rules: {
    "no-plusplus": "off",
    "import/named": "off",
  }
};