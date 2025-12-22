//go through again, a bit confusing.
let foo = 200;

function getFirstName(firstName){
    console.log("Inside getFirstName");
    return function getLastName(lastName){
        return function greeting(){
            console.log("Hello " + firstName + " " + lastName);
            console.log("Number foo is: " + foo);
        }
    }
}

const fnNameRtrn = getFirstName("John");
const lnNameRtrn = fnNameRtrn("Doe");

lnNameRtrn();
