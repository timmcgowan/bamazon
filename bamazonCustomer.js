require('dotenv').load(); // for .env properties
//var keys = require('./key.js'); // Creds
var inquirer = require("inquirer"); // This is a CLI based app!
var logger = require('./config/winston'); // Use my logging config - Winston!
var product = require('./product'); // include my product stuff

// If not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
// }

product.catalog(); // Display Product Catalog

startPrompt();  // Prompt User.

// Create a "Prompt" with a series of questions.
function startPrompt() {
  inquirer
    .prompt([
      // The first should ask them the ID of the product they would like to buy.
      {
        type: 'input',
        name: 'selection',
        message: 'Please enter the Product ID, you wish to purchase.',
        filter: Number
      },
      {
        type: "confirm",
        message: "Are you sure? :",
        name: "confirm",
        default: true
      },
      {
        type: 'input',
        name: 'quanity',
        message: 'Please specify the quanity of units.',
        filter: Number
      },
      {
        type: "confirm",
        message: "Are you sure? :",
        name: "confirm",
        default: true
      }
    ])
    .then(function (inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.confirm) {
        logger.info("Recieved order for "+ inquirerResponse.quanity + " units of product id " + inquirerResponse.selection);
        console.log("Your order for " + inquirerResponse.quanity + " units of product id " + inquirerResponse.selection + " has been received!");
        console.log("Thank you for shopping with Bamazon!");
        product.select(inquirerResponse.selection, inquirerResponse.quanity);
      }
      else {
        console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
      }
    });
}
