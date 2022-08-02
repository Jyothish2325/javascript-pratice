function outer(){
    console.log("cm");
    function inner(){
        console.log(10);
    }
    inner()
}
outer()
outer()