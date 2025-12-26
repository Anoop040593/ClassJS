let candidate = {
    fly: true,
    canTalk() {
        return "Sorry, Can't talk"
    }
}

//Object.user
let user = {
    canCook: true,
    canCode: function() {
        return "Can't Code"
    },
    __proto__: candidate, //inherited from candidate, a new object altogether, 
    // this will be inside prototype

}

console.log(user);
