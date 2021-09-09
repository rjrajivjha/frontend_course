console.log(x);
console.log(y);
console.log(z);

var x = 1;
let y = 4;
const z = 2;

a();
b();

console.log(x);
console.log(y);
console.log(z);



function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

var c = () => {
    var x = 100;
    console.log(x);
}

c();