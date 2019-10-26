const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  // remove first two arguments because first argument is the interpreter (node)
  // the second argument is the file being interpreted (outside). We don't need either of these.
  console.log(args);
  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'today':
      require('./cmds/today')(args);
      break;
    case 'version':
      require('./cmds/version')(args);
      break;
    case 'help':
      require('./cmds/help')(args);
      break;
    case 'forecast':
      require('./cmds/forecast')(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command.`);
      break;
  }
};
