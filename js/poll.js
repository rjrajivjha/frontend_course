console.log(a); //undefined

var a = function(){
    console.log("a called");
}
a(); // a called

var c = function(){
    console.log("c called");
}
b(a, c); // as a argument

function b(a, c){ //as a param
    console.log("b called"); //b called
    console.log(a, c); // a function expression
    a(); // a called
    c();
}