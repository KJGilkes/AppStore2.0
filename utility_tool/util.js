const fs = require('fs');
const color = require('colors');

exports.debug = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const errormsg = color.yellow(msg);
    if (status === undefined) {
      /* eslint-disable */
      console.log(coloredmsg + seperator);
      fs.appendFile('logs/output.log', msg, () => {
      });
    } else if (status === 444) {
      console.log(errormsg + seperator);
      fs.appendFile('logs/output.log', msg, () => {
      });
    } else {
      console.log(coloredmsg, status + seperator);
      /* eslint-enable */
      fs.appendFile('logs/output.log', msg, () => {
      });
    }
  }
};
