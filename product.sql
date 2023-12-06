DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory (
	inventory_id VARCHAR(10) UNIQUE,
	inventory_name VARCHAR(20) NOT NULL,
	inventory_address VARCHAR(50) NOT NULL,
	contact_number VARCHAR(13) NOT NULL,
	mail_id VARCHAR(50) NOT NULL,
	id INTEGER,
	created_by VARCHAR(20),
	updated_by VARCHAR(20),
	created_date DATE,
	updated_date DATE,
	primary key (id)
);

CREATE TABLE products (
	prod_id VARCHAR(10) UNIQUE,
	prod_name VARCHAR(20) NOT NULL,
	price INTEGER NOT NULL,
	date_added DATE,
	quantity INTEGER NOT NULL,
	inventory_id VARCHAR(10),
	id INTEGER,
	created_by VARCHAR(20),
	updated_by VARCHAR(20),
	created_date DATE,
	updated_date DATE,
	primary key (id),
	foreign key(inventory_id) references inventory(inventory_id)
);


ALTER TABLE products
DROP COLUMN date_added;

ALTER TABLE products
ADD date_added DATE;

ALTER TABLE inventory
RENAME COLUMN mail_id TO email_id;

CREATE INDEX prod_name_index
ON products (prod_name);

INSERT INTO inventory (inventory_id, inventory_name, inventory_address, contact_number, email_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('INV001', 'Main Warehouse', '123 Street, Coimbatore', '9876543210', 'mainwarehouse@example.com', 1, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO inventory (inventory_id, inventory_name, inventory_address, contact_number, email_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('INV002', 'Local Store', '456 Avenue, Coimbatore', '9871234560', 'localstore@example.com', 2, 'Admin', 'Admin', '2023-12-06', '2023-12-06');


INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD001', 'Laptop', 1000, 10, 'INV001', 1, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD002', 'Smartphone', 500, 20, 'INV002', 2, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD003', 'Headphones', 50, 50, 'INV001', 3, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD004', 'Desk Chair', 150, 15, 'INV002', 4, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD005', 'Coffee Maker', 80, 30, 'INV001', 5, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD006', 'External Hard Drive', 120, 25, 'INV002', 6, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD007', 'Fitness Tracker', 60, 40, 'INV001', 7, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD008', 'Wireless Mouse', 30, 60, 'INV002', 8, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD009', 'LED Monitor', 200, 12, 'INV001', 9, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

INSERT INTO products (prod_id, prod_name, price, quantity, inventory_id, id, created_by, updated_by, created_date, updated_date)
VALUES ('PROD010', 'Backpack', 40, 50, 'INV002', 10, 'Admin', 'Admin', '2023-12-06', '2023-12-06');

-- Retrieve product details along with inventory information
SELECT products.prod_id, products.prod_name, products.price, products.quantity, inventory.inventory_name
FROM products
INNER JOIN inventory ON products.inventory_id = inventory.inventory_id;

-- Retrieve all inventory records and its products
SELECT inventory.inventory_id, inventory.inventory_name, products.prod_id, products.prod_name
FROM inventory
LEFT JOIN products ON inventory.inventory_id = products.inventory_id;

-- Calculate the total quantity of products in each inventory
SELECT inventory.inventory_id, inventory.inventory_name, SUM(products.quantity) AS total_quantity
FROM inventory
LEFT JOIN products ON inventory.inventory_id = products.inventory_id
GROUP BY inventory.inventory_id, inventory.inventory_name;

-- Calculate the average price of products in each inventory
SELECT inventory.inventory_id, inventory.inventory_name, AVG(products.price::numeric) AS average_price
FROM inventory
LEFT JOIN products ON inventory.inventory_id = products.inventory_id
GROUP BY inventory.inventory_id, inventory.inventory_name;

