# Bamazon - CLI based shopping application

## Overview

Bamazon is a command line based shopping application, which take orders and manage the store inventory.

Features:

- Take Customer Orders
- Automatic update inventory, upon sell of item.

## Setup Instructions

### 1. Run the bamazon.sql to create MySQL Database `bamazon`
  
  This will create the following  
  -  Products Table inside of that database called `products`.
     - item_id (unique id for each product)
     - product_name (Name of product)
     - department_name
     - price (cost to customer)
     - stock_quantity (how much of the product is available in stores)
- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

## User Guide

Because this is a CLI App, you will need to know how to use a command line. 

### Run the command line app

-  The app should then prompt users with two messages.

   * Provide Product ID .
   * Provide Quanity of units to purchase.

- Once the customer has confirmed, your order will be processed.

   * If the quanity requested is higher than the availiable, you will recieve `Insufficient quantity!` error, which will require you update your order. 

