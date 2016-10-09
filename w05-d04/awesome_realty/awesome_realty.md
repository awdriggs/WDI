awesome_realty.md

- The average square footage of all offices.
	++ SELECT AVG(sq_ft) FROM offices;

- The total number of apartments.
	++ SELECT COUNT()
- The apartments where there is no tenant
	++ SELECT COUNT(*) FROM apts;

- The names of all of the companies
	++ SELECT company FROM offices;

- The number of cubicles and bathrooms in the 3rd office
	++ SELECT cubicles, bathrooms FROM offices WHERE id=3;

- The storefronts that have kitchens
	++ SELECT * FROM storefronts WHERE kitchen=true;

- The storefront with the highest square footage and outdoor seating

	++ SELECT owner, sq_ft FROM storefronts WHERE outdoor_seating=true ORDER BY sq_ft DESC LIMIT 1;

- The office with the lowest number of cubicles
	++ SELECT company FROM offices ORDER BY cubicles ASC LIMIT 1;

- The office with the most cubicles and bathrooms
	++ SELECT * FROM offices ORDER BY cubicles DESC, bathrooms DESC LIMIT 1;

	++ SELECT company, max(bathrooms), max(cubicles) FROM offices;