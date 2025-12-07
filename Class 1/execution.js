var a = 10; //1
function fn() { //3
    console.log("I am fn"); //4

    function inner() { //kept in memory just like 3
        console.log(" I am inner") //6
    }
    inner(); //5
}

fn(); //2