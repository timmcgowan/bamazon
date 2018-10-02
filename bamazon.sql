-- Drops the Database if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

USE bamazon;
-- Creates the table "products" --
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  price INTEGER(10),
  stock_quanity INTEGER(10),
  PRIMARY KEY (item_id)
);

-- Populate this database with around 10 different products. --

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Beach Sandals", "shoes",  24.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Cool-Beans T-Shirts", "clothing",  15.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Cargo Shorts", "clothing",  45.40, 34);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Swim Shorts", "clothing",  35.33, 54);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Big Guns - Tank Top", "clothing",  45.40, 36);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Too Cool - Shades", "accessories",  65.00, 20);