CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER (20) auto_increment NOT NULL,
    product_name VARCHAR (40) NOT NULL,
    department_name VARCHAR (40) NOT NULL,
    price INTEGER (20) NOT NULL,
    stock_quantity  INTEGER (20) NOT NULL,
    PRIMARY KEY (item_id)    
);

SELECT * FROM bamazon.products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("goldeneye", "video games", 15.00, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("halo", "video games", 8.00, 125);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("civ vi", "video games", 25.00, 70);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("monopoly", "board games", 12.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("assassins creed", "video games", 40.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("mario kart", "video games", 30.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("clue", "board games", 10.00, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("phase 10", "board games", 5.00, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("animal crossing", "video games", 35.00, 55);