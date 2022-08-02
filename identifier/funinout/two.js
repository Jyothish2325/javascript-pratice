function outer(){
    console.log("chinni");
    function inner(){
        console.log(10,20);
    }
    inner()
    inner()
}
outer()
