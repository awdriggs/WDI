ANSWER TO NFL SQL QUESTIONS

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