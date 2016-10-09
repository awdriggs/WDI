DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS paintings;

CREATE TABLE artists (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	img_url TEXT,
	nationality VARCHAR(255),
	birth_year VARCHAR(255),
	description TEXT
);

CREATE TABLE paintings (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	img_url TEXT,
	year_made VARCHAR(255),
	artist_id INTEGER references artists
);
