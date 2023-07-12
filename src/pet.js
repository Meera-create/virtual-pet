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
    this.children=[]
  

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


//add method to pet constructor 
Pet.prototype.haveBaby=function(babyname){
    const child = new Pet (babyname)
    return child.babyname;
    
 }
 
//new parent instance of pet
const parent = new Pet ();











//create a new property on pet instance, add new property in pet to empty array
//create a new function with baby name
// then with name then create a new instance of pet with new name
//havybaby function will add name to children array

//test instance of pet has a children Array, test when function is called that it adds child to array


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


module.exports = Pet;