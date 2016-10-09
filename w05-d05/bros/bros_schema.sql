DROP TABLE if exists bros_and_broettes;

CREATE TABLE bros_and_broettes(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) not null,
  do_you_lift bool,
  got_cat bool,
  got_dog bool,
  got_other_pets bool
);