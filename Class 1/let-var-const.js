let a = 10;
console.log("Line number 2: ", a);

function fn() {
    let a = 20;
    console.log("Line number 4:", a);
    a++;
    console.log("Line number 7:", a);
    if(a) {
        let a = 30;
        a++;
        console.log("Line number 11", a);
    }
    console.log("Line number 13:", a); 
}

fn();
console.log("Line number 17", a);