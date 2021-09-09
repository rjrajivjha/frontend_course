var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string

var o = {
    a: 1,
    b: null
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
var a = [1, null, 'abra'];
var p = {
    a: 1,
    b: null
}; // allocates memory for an object and contained values

function f(a) {
    return a + 2;
} // allocates a function (which is a callable object)
