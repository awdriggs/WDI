Homework 02-01

# Learning Objectives
- Practice creating a database from the command line
- Practice seeding a database using SQL
- Practice using the Command Line API of postgresql
- Practice querying a database using SQL

# HMH Realty

### Step 1
- Create a new database called `awesome_realty_db`. 

### Step 2 - Create Your schema 
In a SQL file, called `schema.sql` create a schema based off the following ERD.

- An Apartment should have:
  - id - serial primary key
  - apartment_number - integer
  - bedrooms - integer
  - bathrooms - integer
  - address - varchar
  - tenant - varchar
  - occupied - boolean
  - sq_ft - integer
  - price - integer
- An Office should have:
  - id - serial primary key
  - office_number - integer
  - floors - integer
  - sq_ft - integer
  - cubicles - integer
  - bathrooms - integer
  - address - varchar
  - company - varchar
  - occupied - boolean
  - price - integer
- A storefront should have:
  - address - varchar
  - occupied - boolean
  - price - integer
  - kitchen - boolean
  - sq_ft - boolean 
  - owner - varchar
  - outdoor_seating - boolean

  From the command line load the schema `realty_schema.sql` into the database.

- Create a new file called `apt_seed.sql` in this file you should: 
  Write the proper INSERT commands that will add new entries into your apartment, office and storefront tables. You should create at least 6 entries for each table. Vary the attributes of each entry so no two are alike. From the command line, load this seed file into your database. 

### Step 3
Create a new markdown file `awesome_realty.md` and write the SQL commands you would use to retrieve the following information from your database. Test each command in PSQL to make sure it is correct:

- The average square footage of all offices.
- The total number of apartments.
- The apartments where there is no tenant
- The names of all of the companies
- The number of cubicles and bathrooms in the 3rd office
- The storefronts that have kitchens
- The storefront with the highest square footage and outdoor seating
- The office with the lowest number of cubicles
- The office with the most cubicles and bathrooms

_hint_: some of the commands we did not go over in class. W3 schools has an awesome guide for sql commands :wink:

# The NFL

### Step 1
Create a new file called `nfl.md`. In this file write your answers to step 2.

### Step 2 - Query!


Using the db we created earlier today. 

#### Queries
Some may require more than one query (i.e. you may need to get information about a team before you can complete a query for players). Test each command in PSQL to make sure it is correct:

- List the names of all NFL teams
  ++ SELECT name FROM teams
- List the stadium name and head coach of all NFC teams
  ++ SELECT stadium, head_coach FROM teams WHERE conference='NFC';

- List the head coaches of the AFC South
  SELECT head_coach FROM teams WHERE conference='AFC' AND division='South';

- The total number of players in the NFL
  ++ SELECT count(*) FROM players;

- The team names and head coaches of the NFC North and AFC East
  ++  SELECT name, head_coach FROM teams WHERE (conference='NFC' AND DIVISION='North') OR (conference='AFC' AND DIVISION='East');

  SELECT * FROM Customers
WHERE IN Country='Germany'
AND (City='Berlin' OR City='München');

- The 50 players with the highest salaries
  ++ SELECT * FROM players ORDER BY salary DESC LIMIT 50;

- The average salary of all NFL players
  ++ SELECT ROUND(AVG(salary),2) FROM players;

- The names and positions of players with a salary above 10_000_000
  ++ SELECT name, position FROM players WHERE salary>10000000;

- The player with the highest salary in the NFL
  ++ SELECT name, salary FROM players ORDER BY salary DESC LIMIT 1;

- The name and position of the first 100 players with the lowest salaries

SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;

- The average salary for a DE in the nfl

  ++ SELECT ROUND(AVG(salary), 2) FROM players WHERE position='DB';

  ++ SELECT name, salary FROM players WHERE position='DB'; This was for testing, David Brodsky is the only DB in the database.



