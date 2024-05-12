function receivesAFunction(callback) {
    //call the provided callback function.
    //example of a callback function without giving it something to do.
    callback();
}

const chai = require('chai');
const expect = chai.expect;

// Define the function returnsANamedFunction
function returnsANamedFunction() {
    // This is an example of a named function
    return function namedFunction() {
        // Function implementation goes here
    };
}

// Define the function returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    // This is an example of an anonymous function
    return function() {
        // Function implementation goes here
    };
}