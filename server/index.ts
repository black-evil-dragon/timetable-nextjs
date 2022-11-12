console.clear();

// Imports
import express, { Express } from 'express';
import dotenv from 'dotenv';

const chalk = require('chalk');

// Express
const app: Express = express();

// App use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Routes
require('./src/routes')(app);


// Env
dotenv.config();

const port = process.env.PORT || 8000;
const host = process.env.HOST || '127.0.0.1'
const version = process.env.VERSION || 'ProMax'


// Init
app.listen(port, () => {
    console.log(chalk.green('Server started successfully!\n'));
    console.log(`App listening on port:${chalk.underline(port)}\nVersion: ${version}\n\n${chalk.bold('  URL:    ')}http://${host + ':' + port}\n`);
});