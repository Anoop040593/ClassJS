const obj = {}
Object.defineProperty(obj, "foo", {
    value: "bar",
   // writable: true, //if it is true, object can be edited. else cant be.
    configurable: true //property can't be deleted if false.,
})

console.log(obj);

obj.foo = "bax"; //doesnt change
console.log(obj);

// Demonstrating configurable
// With configurable: true, we can delete the property
delete obj.foo;
console.log("After delete:", obj); // foo is gone

// Let's create another property with configurable: false
Object.defineProperty(obj, "baz", {
    value: "qux",
    configurable: false
});

console.log("Before delete attempt:", obj);

// Try to delete - this will fail silently in non-strict mode
delete obj.baz;
console.log("After delete attempt:", obj); // baz is still there

// Try to change descriptor - this will throw an error
try {
    Object.defineProperty(obj, "baz", {
        configurable: true // trying to change it
    });
} catch (e) {
    console.log("Error changing descriptor:", e.message);
}

// Create properties with different enumerable settings
Object.defineProperty(obj, "visible", {
    value: "I am visible",
    enumerable: true
});

Object.defineProperty(obj, "hidden", {
    value: "I am hidden",
    enumerable: false
});

// Add a regular property (enumerable by default)
obj.regular = "I am regular";

console.log("Object:", obj);
console.log("Object.keys():", Object.keys(obj)); // Only enumerable properties
console.log("for...in loop:");
for (let key in obj) { //u wont see hidden here, since enumerable is true
    console.log(`  ${key}: ${obj[key]}`);
}

console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(obj)); // All own properties, regardless of enumerable