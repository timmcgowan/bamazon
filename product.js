require('dotenv').load(); // for .env properties
var mysql = require("mysql"); // Persistent Backend
var logger = require('./config/winston'); // Use my logging config - Winston!

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",  // Hard Coded for now.
    // Port
    port: 8889,
    // username
    user: "root",
    // Your password
    password: "",
    database: "bamazon"
});

exports.select = function (item, qty) {
    connection.query("SELECT * FROM products WHERE item_id = " + item, function (err, res) {
        if (err) throw err;
        logger.debug(res);
        //return res;

        console.log('\nYou Selected: ');
        console.log('++++++++++++++++++++++++\n');
        var cost = 0;
        var subtotal;
        var strOut = '';
        for (var p = 0; p < res.length; p++) {
            strOut = '';
            if (qty){
                strOut += 'Quanity: ' + qty + ' || ';
            }
            strOut += 'Product ID: ' + res[p].item_id + ' || ';
            strOut += 'Product Name: ' + res[p].product_name + ' || ';
            strOut += 'Department: ' + res[p].department_name + ' || ';
            strOut += 'Price: $' + res[p].price;//+ '\n';
            subtotal = qty * res[p].price;
            logger.info('subtotal = ' + subtotal);
            cost = cost + subtotal;
            console.log(strOut);
        }
        console.log('\n++++++++++++++++++++++++');
        console.log('\nTotal Costs: ' + cost );
        console.log('\n++++++++++++++++++++++++');
    });
}

// List of Products
exports.catalog = function () {
    // connect to the mysql server and sql database
    connection.connect(function (err) {
        if (err) throw err;
        logger.info("Connected as id " + connection.threadId);
        // run the start function after the connection is made to prompt the user
    });
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        logger.debug(res);
        //return res;

        console.log('\nProduct Catalog: ');
        console.log('++++++++++++++++++++++++\n');

        var strOut = '';
        for (var p = 0; p < res.length; p++) {
            strOut = '';
            strOut += 'Product ID: ' + res[p].item_id + ' || ';
            strOut += 'Product Name: ' + res[p].product_name + ' || ';
            strOut += 'Department: ' + res[p].department_name + ' || ';
            strOut += 'Price: $' + res[p].price;//+ '\n';

            console.log(strOut);
        }
        console.log('\n++++++++++++++++++++++++');
    });
    //connection.end();
}