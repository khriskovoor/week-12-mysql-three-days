var mysql = require('mysql');
var prompt = require('prompt');
var consoletable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "Bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
})

var productInfo = function() {
    var query = 'SELECT ItemID, ProductName, Price FROM `Products`;'
    connection.query(query, function(err, res) {
        console.table(res);

        productMenu();
    })
};

productInfo();

var productMenu = function() {

    var prompt = require('prompt');

    prompt.start();


    prompt.get(['ItemID', 'StockQuantity'], function(err, prompt_result) {

        var query = 'SELECT ItemID, StockQuantity, Price FROM products';

        var database_values = connection.query(query, function(err, query_res) {


            if (prompt_result.StockQuantity > query_res[prompt_result.ItemID - 1].StockQuantity) {
                console.log('Insufficient Quantity!')
            } else {
                query_res[prompt_result.ItemID - 1].StockQuantity -= prompt_result.StockQuantity;

                console.log('Total cost:' + prompt_result.StockQuantity * query_res[prompt_result.ItemID - 1].Price);
                console.log('Updated Stock Quantity:' + query_res[prompt_result.ItemID - 1].StockQuantity);
                console.log('Price:' + query_res[prompt_result.ItemID - 1].Price);
            }

        });
    });
}
