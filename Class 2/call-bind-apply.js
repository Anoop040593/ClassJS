let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function(mem1, mem2) {
        console.log(
            `Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}`
        );
        console.log(`I am wroking with ${mem1} and ${mem2}`);
    }
};

let ironMan = {
    name: "Tony",
    team: "iron man"
};

cap.petersTeam("Natasha", "Clint"); //normal method calls

cap.petersTeam.call(ironMan, "Bruce", "Thor");
//1st arg => this context
//2nd arg -> comma seperated values

cap.petersTeam.apply(ironMan, ["Bruce", "Thor"]);
//1st arg -> this context
//2nd arg => normal args takes array of values

let peterSpiderMan = cap.petersTeam.bind(ironMan, "Wanda", "Vision");
//bind returns a function with this context changed

console.log(peterSpiderMan);
peterSpiderMan();

