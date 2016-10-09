//thom's code

 var wordCount = function (inputString) {

    var inputArray = inputString.split(' ');
    var outputs = {};

    inputArray.forEach (function (iteration) {
        if (outputs[iteration] >= 1) {
            outputs[iteration] += 1
        } else {
            outputs[iteration] = 1
        }
    });

    return outputs
}  

//test function
console.log(wordCount("Hello hello goodbye I don't know why why why goodbye know"));

