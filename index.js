const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  // remove first two arguments because first argument is the interpreter (node)
  // the second argument is the file being interpreted (outside). We don't need either of these.
  console.log(args);
};
