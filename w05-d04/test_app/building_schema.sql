DROP TABLE IF EXISTS buildings;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS tenants;

CREATE TABLE buildings (
	id SERIAL PRIMARY KEY,
	address VARCHAR(255),
	units INTEGER,
	vacancies INTEGER
)

CREATE TABLE apartments (
	id SERIAL PRIMARY KEY,
	unit VARCHAR(255),
	beds INTEGER,
	baths INTEGER,
	sqft INTEGER,
	rent_control BOOLEAN,
	rent_stabilized BOOLEAN,
)

CREATE TABLE tenants (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255);
	family_size INTEGER;
	pet BOOLEAN;
	rent INTEGER;
	lease_end_date 
)
