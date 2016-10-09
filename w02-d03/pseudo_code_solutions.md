# Problem Solving

## Learning Objectives

- Work on breaking down problems
- Translate vague questions into concrete ones
- How would you solve the following problems?

## Problems

### Pounds to Kilograms

How would you convert 120lbs to kilograms?
*hold pounds in a var "pounds", assign pounds to 120
*create a conversion function, takes number, returns kg
	-inside function, create var "converted"
	-assing converted the product of number and by 0.453592;
	-return converted
*create a var called "kilos",
*assign kilos to the return of the conversion function when passed pounds.

### Kilograms to Pounds
How would you convert 80 kilograms to pounds?
*hold kilos in a var, assign 80
*create a conversion function, takes a number, returns pounds
	-create a var called "converted"
	-assign converted to the product of number and 2.20462
	-return converted
*create a var called pounds
*assign pounds to the return of the conversion function with passed kilos.

### Killer Caffeine

It's estimated that 6 grams of caffine per hundred pounds of body weight can cause death!
Given an 8oz cup of coffee has 95mg of caffeine,
calculate how many cups it takes to kill YOU.

-make a var to hold userWeight, assign to 180
-make a var called killRate, set to 1.58, the unit rate of pounds to 1 cup of caffeine, i.e. 1 cup would kill someone who weighs 1.58 pounds
-set var certainDeath to userWeight/killRate

### Old Modems

How long would it take to download a 25GB ripped copy of Blade Runner over a
$200 56k/s modem from 1995?
*25gb = 25000000 kb
*divide 25000000 by 56, this is the number of seconds
*divide seconds by 60 to get minutes
*divide minutes by 60 to get hours

### A Long Long Long time

If you drove from Portland to New York at a steady 55 miles per hour, how many
times could you listen to the Beatle's White Album in full?

### How much would it cost to drive around the world at the equator?
Assuming gas costs $2.675 and you drive at a steady 55 mph.