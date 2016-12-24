var vorpal = require('vorpal')();

vorpal
    .delimiter('git-workflow$')
    .show();

vorpal
    .command('feature start', 'Start working on a new feature')
    .action(function (args, cb) {
      const self = this;
      this.prompt({
        type: 'input',
        name: 'ticket-id',
        message: 'Enter the ticket ID of the story:',
        // Others prompt, the base branch + titlte of the ticket
      }, function (result) {
        // Create a function to create a new branch: ticket-id-<title>
        // where ticket-id is the ticket id of your story and <title> is
        // title of your story lowercase + spaces replaced by '-' and max
        // 10 chars. Create a function for this
        // git checkout -b <feature-branch> <base>

      });
    });

vorpal
  // Finish a feature
  .command('feature finish', 'Finish a feature')
  .action(function (args, callback) {
    const self = this;

  });

vorpal
  .command('feature checkout', 'Checkout to an existing feature branch')

vorpal
  .command('feature rebase')

vorpal
  .command('feature publish')
  .option('-r, --remote <remote>')
  .option('-b, --branch <branch>')
  .action(function (args, callback) {
    if (typeof args.options.remote === 'undefined' || typeof args.options.branch == 'undefined') {
      this.log('No options!');
      callback();
    }
    callback();
  });

vorpal
  .command('release tag', 'Release a tag')

