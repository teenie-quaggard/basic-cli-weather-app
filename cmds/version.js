const { version } = require('../package.json');

module.exports = args => {
  console.log(`This is version ${version} of this Google Books search.`);
};
