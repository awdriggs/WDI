DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	age INTEGER,
	gender VARCHAR(255),
	sexy BOOLEAN,
	hair BOOLEAN,
	hair_color TEXT
)