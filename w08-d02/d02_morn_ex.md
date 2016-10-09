
## Word Count 

Create a function called `wordCount` that takes one argument, `inputString`.

The function will return an object with the attributes of the object being the unique words found in `inputString` and the value being the number of times those words were encountered in `inputString`.

Assume that the input will not contain punctuation.

#### Examples 

```javascript 
wordCount("Hello hello goodbye I don't know why why why goodbye know")

// outputs {"Hello": 1, "I": 1, "don't": 1, "goodbye": 2, "hello": 1, "know": 2, "why": 3}
```


## Pairs 

Create a function called `pairs` that takes two arguments, `words` and `repeats`.

`words` will be an array of words

`repeats` will be an optional boolean parameter that will be false if repeats are not desired. If the parameter is not included in the call to pairs, the behavior should be as if it we true.

`pairs` takes the words in `words` and generates an array of all possible pairs. A pair is created by joining two words together with a hyphen. 

#### Examples 

```javascript
pairs(["apple", "bat", "cow"])

//outputs ["apple-apple", "apple-bat", "apple-cow", "bat-apple", "bat-bat", "bat-cow", "cow-apple", "cow-bat", "cow-cow"]

pairs(["apple", "bat", "cow"], false)

//outputs ["apple-apple", "apple-bat", "apple-cow", "bat-bat", "bat-cow", "cow-cow"]
```




