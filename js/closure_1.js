function add_name(){
    var name = "Rajiv";
    function print_name(){
        console.log(name);
    }
    console.log("abcs");
    return print_name;
}

var x = add_name();

console.log(x);

x();