var varName = 10;

function b() {
    console.log("in b: " + varName);
}

function fn() {
    var varName = 20;
    b();
    console.log("in fn: " + varName);
}

fn();