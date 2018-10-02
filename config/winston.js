'use strict';
var appRoot = require('app-root-path');
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// define settings for each transport (file, console)
var options = {
  file: {
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(info => {
          return `${info.timestamp} ${info.level}: ${info.message}`;
      })
    ),
    filename: `${appRoot}/logs/info.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const transports = {
  console: new winston.transports.Console(options.console),
  file: new winston.transports.File(options.file)
};

var logger = winston.createLogger({
  transports: [
//    transports.console,
    transports.file
  ],
  exitOnError: false
});

logger.info('Logger started');
//transports.file.level = 'error';

module.exports = logger;
 