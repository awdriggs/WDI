DROP TABLE if exists todos;

CREATE TABLE todos(
	id SERIAL PRIMARY KEY,
	task TEXT,
	completed BOOLEAN
)


