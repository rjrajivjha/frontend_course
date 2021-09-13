var p = 5; //global root
function myFunc() {
    var p = 9; //function scope
    function decl(c) {
        
        console.log(p+c);
    }
    p = 11;
    return decl;
}
// p die

a = myFunc()(1); // function decl() {console.log(p);}
//why a = 9? 
console.log(a);

