
let myHeros = ["thor", "spiderman"]

function makeHero(){
    console.log("Rifat u are hero now");
}

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

let favHero = "Ironman"


Object.prototype.Rifat = function(){
    console.log(`Rifat is present in all objects`);
}

console.log(Object.prototype);

myHeros.Rifat()
makeHero.Rifat()
heroPower.Rifat()
favHero.Rifat()


Array.prototype.heyRifat = function(){
    console.log(`Only work for array`);
}

console.log(Array.prototype);

myHeros.heyRifat() 
// makeHero.heyRifat() --> not possible
// heroPower.heyRifat() --> not possible
// favHero.heyRifat() --> not possible



Function.prototype.whyHero= function(){
    console.log("Only work for function");
}

console.log(Function.prototype);

makeHero.whyHero();
// myHeros.whyHero() --> not possible
// heroPower.whyHero() --> not possible
// favHero.whyHero() --> not possible

