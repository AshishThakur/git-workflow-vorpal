var vorpal = require('vorpal')();
var exec = require('child_process').exec;

vorpal
    .delimiter('git-workflow$')
    .show();

vorpal
    .command('feature start', 'Start working on a new feature')
    .action(function (args, cb) {
      const self = this;
      this.prompt([
          {
            type: 'input',
            name: 'ticket-id',
            message: 'Enter the ticket ID of the story:',
            // Others prompt, the base branch + titlte of the ticket
          },
          {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the story',
          }],
         function (result) {
          // Create a function to create a new branch: ticket-id-<title>
          // where ticket-id is the ticket id of your story and <title> is
          // title of your story lowercase + spaces replaced by '-' and max
          // 10 chars. Create a function for this
          // git checkout -b <feature-branch> <base>
          git checkout -b <feature-branch> <base>
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
  .option('-b, --branch <branch>')
  .action(function (args, callback) {
    if (typeof args.options.branch == 'undefined') {
      this.log('No options!');
      callback();
    }
    callback();
  });

vorpal
  .command('feature rebase')

vorpal
  .command('feature publish')
  .option('-r, --remote <remote>')
  .option('-b, --branch <branch>')
  .validate(function (args) {
    if (typeof args.options.remote === 'undefined' || typeof args.options.branch == 'undefined') {
      this.help();
      return 'No options!';
    }
  })
  .action(function (args, callback) {
	  // git checkout <branch>
		// git push <remote> <branch>
    callback();
  });

vorpal
  .command('release tag', 'Release a tag')
  .action(function (args, cb) {
      const self = this;
      this.prompt([
          {
            type: 'input',
            name: 'base',
            message: 'Enter the base branch from where tag would be cut:',
          },
          {
            type: 'input',
            name: 'tag',
            message: 'Enter the tag name:',
          },
          {
            type: 'input',
            name: 'remote',
            message: 'Enter the remote repo',
          }
        ],
        function (result) {
           exec('git checkout ' + result.base, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
           });
        });
    });
