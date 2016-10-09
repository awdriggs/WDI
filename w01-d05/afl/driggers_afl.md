#Week 1 Assessment

## Problem 1

How do I get the string "dog" using the variable pets

`pets = ["iguana", "hamster", "dog"]`

`pets[3];`

## Problem 2

How do I get the string `"snails"` using the variable `coolThings`

`coolThings = { david: "t-shirts",
                will:  "nike boots",
                pavan: "snails"}`

`coolThings.pavan`

## Problem 3

How do I get the string `"Clinton"` using the variable `knowledge`

`knowledge = {presidents: ["Clinton",
                             "Roosevelt",
                             "Bush1",
                             "Lincoln"],
             states:   ["Nebraska",
                         "Hawaii"]}`

`knowledge.presidents[0]`

## Problem 4

Using the `variable userName`, create a variable `greeting` that holds a greeting message. So for example.

`userName = "Big Steve"`

after your code, the variable `greeting` should equal

`"Big Steve, welcome to the party."`

`var userName = "Adam";
var greeting = (userName + ", welcome to the party");`

## Problem 5

Using the variables `bankBalance` and `itemPrice`, create an if-statement that logs `"you can buy it"` to the console if `bankBalance` is greater than or equals to `itemPrice`.

`var bank_balance = 200
var item_price = 30

if(bank_balance >= item_price){
	console.log("you can buy it");
}
`

##Problem 6

Using the variables `numberOfPeople` and `numberOfSpots` in car create if-else if-else-statement that logs one of the following things to the console.

*	"there are more people than cars" if numberOfPeople is greater than numberOfCars
*	"there are fewer people than cars" if numberOfPeople is less than numberOfCars
*	"there are the same number of cars as people" if numberOfPeople equals numberOfCars

`numberOfPeople = 3
numberOfCars = 10

if(numberOfPeople > numberOfCars){
	console.log("there are more people than cars");
} else if(numberOfPeople < numberOfCars){
	console.log("there are fewer people than cars");
} else if(numberOfPeople === numberOfCars){
	console.log("there are the same number of cars as people");
}`

## Problem 7

Write a function called `adds7` that takes one parameter called aNumber. Your method will return the number passed in but incremented by 7. Here are some sample calls of the method you are to write.

```
var adds7 = function(aNumber){
	return aNumber + 7;
}

adds7(4)
//returns 11
adds7(10)
//returns 17
```
## Problem 8

Write a function called greetsTwo that takes two arguments called name1 and name2 which will both be strings. Your method should return a string saying hello to both names. Here are some sample calls of the method you are to write.
```
var greetsTwo = function(name1, name2){
	return "Hello " + name1 + ". Hello " + name2 + ".";
}

greetsTwo("David", "Will");
//returns "Hello David. Hello Will."
greetsTwo("Hans", "The Dude");
//returns "Hello Hans. Hello The Dude."
```
## Problem 9

Write a function called greaterThan that takes two arguments number1 and number2. The return value will depend on a condition.

return `number1` if it is greater `number2`
return `number2` if it is greater `number1`
return "the same!" of `number1` and `number2` are equal

```
var greaterThan = function(number1, number2){
	if(number1 > number2){
		return number1;
	} else return number2;
}
```
## Problem 10
Write a function called capitalizer that takes a single argument, a string, and returns the string with each word capitalized.

* theRock = "dwayne";
* capitalizer(theRock) = "Dwayne";

```
var capitalizer = function(aString){
	var nArray = aString.split(" ");
	
	var capitalizeFirstLetter = function(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}

	for(var i = 0; i < nArray.length; i++){
		debugger;
		//not working, come back to this
		nArray[i] = capitalizeFirstLetter(nArray[i]);

	}

	return nArray.join(" ");
}
```

## Problem 11
Create an object literal called `bicycle`.  It should have the following properties:

#### Attributes

`make`: the make of the bike (something like Schwinn, Mongoose, etc.)

`color`: the color of the bike.

#### Behaviors

`paintRed`():  changes the color of the bike to red.

```
var bicycle = {
	make : "Trek",
	color: "Blue",
	paintRed: function(){this.color="Red";}
}

console.log(bicycle.color);
console.log(bicycle.paintRed());
console.log(bicycle.color);
```

## Problem 12


Write a function called saysWill.  saysWill takes two arguments, an input and and a function.  saysWill should return the result of calling that function argument with the input argument, but with " says Will."

```
//this isn't working, i would like help with it
var capitalizer = function(aString){
	var nArray = aString.split(" ");
	
	var capitalizeFirstLetter = function(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}

	for(var i = 0; i < nArray.length; i++){
		nArray[i] = capitalizeFirstLetter(nArray[i]);

	}

	return nArray.join(" ");
}

//Tester Functions
// theRock = "dwayne is the rock";
// theRock = capitalizer(theRock);
// console.log(theRock);

var saysWill = function(aFunction, aString){
	var prepend =  aFunction(aString);
	return prepend + "says Will";
}

console.log(saysWill(capitalizer(), "dwayne"));

```