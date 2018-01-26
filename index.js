let chalk = require('chalk');

const app = require('./src/app');

// port
const port = process.argv[2];

// start server here
app.listen(port);
console.log(chalk.green('Hello web server'));
