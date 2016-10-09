DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS employess;
DROP TABLE IF EXISTS invoices;

CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	product VARCHAR(255),
	inventory INTEGER,
	price INTEGER,
	manufacturer VARCHAR(255)
);

CREATE TABLE employees(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	lastname VARCHAR(255),
	hours INTEGER,
	full_time BOOLEAN,
	salary INTEGER
);

CREATE TABLE invoices(
	id SERIAL PRIMARY KEY,
	product VARCHAR(255),
	quantity INTEGER,
	price INTEGER,
	date_sold DATE NOT NULL default CURRENT_DATE
);
