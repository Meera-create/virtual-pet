//magic numbers
const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const HUNGRY = "I am hungry"
const UNFIT = "I need a walk"
const BOTH = "I am hungry AND I need a walk"
const FINE = "I feel great!"
const DIED = "Your pet is no longer alive :("
const ERROR = new Error('Your pet is no longer alive :(')

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 4;

}

//getter function 
Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness += 3;
}

Pet.prototype.walk = function () {
    if (this.fitness + 4 <= MAX_FITNESS) {
        this.fitness += 4;
    }
    else {
        this.fitness = MAX_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw ERROR;
    }

    if (this.hunger < 0) {
        this.hunger = MIN_HUNGER;
    }

    if (this.hunger - 3 >= MIN_HUNGER) {
        this.hunger -= 3;
    }


}

Pet.prototype.checkUp = function () {
    if (this.hunger >= 5 && this.fitness <= 3) {
        return BOTH
    }
    if (this.hunger < 5 && this.fitness > 3) {
        return FINE
    }
    if (this.fitness <= 3) {
        return UNFIT
    }
    if (this.hunger >= 5) {
        return HUNGRY
    }

}



//parent instance


class Parent extends Pet {
    constructor(childname,name){
        this.children=[childname];
        super(name);

    }
    haveBaby(){
        return this.children;
    }
}


/*
const parent = new Pet(parentname);
parent.children = [];
parent.name = parentname;


parent.prototype.haveBaby = function (childname) {
    parent.children.push(childname);
}

parent.prototype.children = function () {
    return parent.children;
}
*/

//const child = new Pet (childname);
//child.childname=childname;


module.exports = Pet, Parent;