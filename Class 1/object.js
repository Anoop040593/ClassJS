let cap = {
    name: "Class 1 Object",
    age: 10,
    "last Name": "Elementary",
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    },
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    },
    items: ["book", "pen", "notebook"]
}

console.log("Object cap: ", cap);
console.log("Cap's name: ", cap.name);
console.log("Cap's last name: ", cap["last Name"]);
console.log("Cap's address: ", cap.address);
console.log("Cap's city: ", cap.address.city);
console.log("Cap's items: ", cap.items);
console.log("First item: ", cap.items[0]);
cap.sayHello();