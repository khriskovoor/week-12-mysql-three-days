CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  ItemID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(45) NOT NULL,
    DepartmentName VARCHAR(45) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from products;

INSERT INTO products(ProductName,DepartmentName,Price,StockQuantity)
VALUES 
	("HP Pavilion 15-au020wm Laptop","Electronics",519.00,150),
    ("iPad Air 2","Electronics",479.99,250),
    ("700c Roadmaster","Sports & Outdoors",99.99,25),
    ("Lifetime Daylite Kayak","Sports & Outdoors",259.00,10),
    ("LG 55UH6090 55in 4K TV","Electronics",619.95,50),
    ("Akira: The Movie","Movies & TV",4.99,20),
    ("Star Wars: The Complete Saga ","Movies & TV",89.96,50),
    ("Xbox One 1TB Console","Video Games",549.69,200),
    ("Halo 5: Guardians","Video Games",59.99,200),
    ("Forza Motorsport 6","Video Games",59.99,150)