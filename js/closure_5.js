// Source : Akshay Saini Namaste Js
// Tweaked version

/*
function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    console.log("Rajiv");
    return inner;
}
closing_fn = outer();

closing_fn();

outer()();
*/

// Hoisting of variable and closure
/*
function outer(){
    function inner(){
        console.log(a);
    }
    var a = 100;
    console.log("Rajiv");
    return inner;
}
closing_fn = outer();

closing_fn();

outer()();
*/

// Are let declarations closed over?
/*

function outer(){
    function inner(){
        console.log(a);
    }
    let a = 100;
    console.log("Rajiv");
    return inner;
}
closing_fn = outer();

closing_fn();
*/

// Are function parameters closed over
/* 
function outer(b){
    function inner(){
        console.log(a, b);
    }
    let a = 100;

    console.log("Rajiv", b);
    return inner;
}
closing_fn = outer("Hello ji!");

closing_fn();
*/

/* 
function outer(b){
    function inner(){
        console.log(a, b);
    }
    let a = 100;
    b = "kya haal ji";
    console.log("Rajiv", b);
    return inner;
}
closing_fn = outer("Hello ji!");

closing_fn();
*/

// Relationships in multi level Hierarchy based functions
/*
function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a, b, c);
        }
        let a = 100;
        console.log("Rajiv", b);
        return inner;
    }
    return outer;
}
closing_level_1 = outest();

closing_level_2 = closing_level_1("Hello world")

closing_level_2();
*/

//Scope chain resolving of variables
/*
function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a, b, c);
        }
        let a = 100;
        console.log("Rajiv", b);
        return inner;
    }
    return outer;
}

let a = 100;

closing_level_1 = outest();

closing_level_2 = closing_level_1("Hello world")

closing_level_2();
*/
