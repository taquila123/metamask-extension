const { runCommand } = require('../../development/lib/run-command');
const { retry } = require('../../development/lib/retry');

function ensureXServerIsRunning() {
  return retry(
    3,
    { delay: 2000, rejectionMessage: 'X server does not seem to be running?!' },
    () => {
      return runCommand('xset', ['q'], { stdio: 'ignore' });
    },
  );
}

module.exports = { ensureXServerIsRunning };
