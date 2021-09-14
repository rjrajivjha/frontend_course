var name = "BOSS"

function add_name(){
    var name = "Rajiv";
    function print_name(){
        console.log(name);
    }
    console.log("abcs");
    var name = "Rj Rajiv"
    return print_name;
}
console.log(name);
var x = add_name();

console.log(x);

x();