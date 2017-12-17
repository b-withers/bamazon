var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require("columnify");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "m1Ner977",
    database: "bamazon"
});


connection.connect(function(error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
});


    connection.query("SELECT * FROM products", function(error, response) {
        if (error) throw error;

        for (var i = 0; i < response.length; i++) {
            console.log("----------");
            console.log("ID: " + response[i].item_id);
            console.log("Product: " + response[i].product_name);
            console.log("Department: " + response[i].department_name);
            console.log("Price: " + response[i].price);
            console.log("Quantity: " + response[i].stock_quantity);
            console.log("----------");
        }

        inquirer.prompt([{
            name: "id",
            type: "input",
            message: "What would you like to buy? Enter ID: ",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }, {
            name: "units",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }

        }]).then(function(answer) {

            for (var i = 0; i < response.length; i++) {
                if (response[i].item_id === parseInt(answer.id))
                    stock(parseInt(answer.id), answer.units);
            }
        });
    });


function stock(itemID, units) {
    connection.query("SELECT * FROM products WHERE ?", {
        item_id: itemID
    }, function(error, response) {
        if (error) throw error;

        if (response[0].stock_quantity <= 0) {
            console.log("Insufficient quantity!");
           
        } else
            updateQuantity(itemID, units);
    });
}

function cost(itemID, units) {
    connection.query("SELECT * FROM products WHERE ?", {
        item_id: itemID
    }, function(error, response) {
        if (error) throw error;

        var totalCost = response[0].price * units;
        console.log("Total cost is $ " + totalCost);

        
    });
}

function updateQuantity(itemID, units) {
    connection.query("SELECT * FROM products WHERE ?", {
        item_id: itemID
    }, function(error, response) {
        if (error) throw error;

        var newQuantity = response[0].stock_quantity - units;

        if (newQuantity < 0)
            newQuantity = 0;

        connection.query("UPDATE products SET ? WHERE ?", [{
            stock_quantity: newQuantity
        }, {
            item_id: itemID
        }], function(error, response) {});

        cost(itemID, units);
    });
}






  
