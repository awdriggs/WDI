# Hangman

### Learning Objectives

* Application of OOP
* Application of collections
* Practice with control flow structures

### Problem Statement

Create the popular game of Hangman as a Ruby command line application!

### Step One - Problem Modeling

DO NOT TOUCH YOUR COMPUTERS.

Model this problem. What are the nouns involved? What are the verbs involved?
What are the features of this application? Spend exactly 15 minutes thinking
about this and writing (and drawing) your thoughts down.

### Step Two - Classes

Implement the classes for the Hangman game according to the following
specifications.

Use our best friend `binding.pry` to test out *every single method* of your
classes as you build them!

#### Word class

**Attributes**

* `@letters`
  * a data structure that stores information about the letters of the word,
    along with information about which letters are revealed. A possible data
    structure is shown below. Feel free to come up with your own. Feel equally
    free to use the example structure below.

```ruby
# Word: ruby
# The letters 'r' and 'b' have been guessed
[
  {
    'letter' => 'r',
    'hidden' => false
  },
  {
    'letter' => 'u',
    'hidden' => true
  },
  {
    'letter' => 'b',
    'hidden' => false
  },
  {
    'letter' => 'y',
    'hidden' => true
  }
]
```

**Behaviors**

* `initialize(word)`
  * set up the `letters` instance variable based on the `word` input argument.
  * assume that `word` is a string
* `found?()`
  * returns `true` if all letters of the word have been guessed
  * returns `false` if at least one letter is still unguessed
* `try(letter)`
  * accepts one input argument, `letter`, a string containing a single character
  * finds all matching letters in `@letters` and sets their `hidden` to false
    (since they have now been guessed)
  * returns `true` if at least one instance of the letter was found
  * returns `false` if the letter was not found
* `render()`
  * returns a string that represents the word in its guessed state. If a letter
    is guessed, it will be present in the string. If it has not been guessed, it
    will be represented as an underscore.
  * For example, in the 'ruby' example above, `render()` will return the string `'r_b_'`

#### Game class

**Attributes**

* `@guesses`
  * a number
* `@guessed_letters`
  * an array of characters that have been guessed so far
* `@words`
  * an array of strings that will serve as the bank of words for the game
* `@current_word`
  * an object of the `Word` class

**Behaviors**

* `initialize(words)`
  * Accepts one input argument, `words`, an array of strings
  * Sets `@words` to `words`
  * Should call the method `start_game()`
* `start_game()`
  * Sets `@guessed_letters` to an empty array
  * Sets `@current_word` to one of the words randomly from `@words`
  * Sets `@guesses` to 10
* `guesses()`
  * Returns `@guesses`
* `guess(letter)`
  * Should accept an input argument, a letter to be guessed
  * If `letter` has not been guessed already
    * Should ask the word to reveal any instances of that letter
    * Should decrement the number of guesses left if the letter was not found
  * If `letter` has already been guessed, do nothing
* `over?()`
  * Returns true if the game is over. Game is over if either
    * Word is completely revealed, or
    * Player runs out of guesses
* `over_message()`
  * Returns a string
    * If the word is completely revealed, the string returned is `"Winner!"`
    * If the player runs out of guesses, the string returned is `"Better luck next time!"`
    * If the game is not over yet, the string returned is an empty string (`""`)
* `render()`
  * Returns a string that represents the word in its current guessed state and
    also the number of guesses remaining

### Step three - The main program

Create a file called `main.rb`, and write your main program code here, utilizing
the classes that you have set up. This program should:

* create an array of words to be used as a bank of words for the game
* create a new Game object using this array of words
* accept user input and make moves in a looping manner, until the game is over
  * When the game is over, the game over message should be displayed and the
program should exit.

### Bonuses

* After the game is over, give the user the option to either quit or start a
  new game, and implement the necessary code for this feature
* Give the user the option to add more words to the Game object's bank of words,
  and implement the necessary code for this feature
