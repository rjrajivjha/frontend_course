function print_at_nth_interval(){
    for (var i = 1; i<=10000; i++){
        setTimeout(function(){
            // console.log("after"+i+"time");
            console.log(i);
        }, i*0.001);
    }
    console.log("Rj Testing setTimeOut")
}
console.log("Rj Testing setTimeOut")
print_at_nth_interval();