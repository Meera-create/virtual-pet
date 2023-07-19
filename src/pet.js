
const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
MAX_AGE=30;
MAX_HUNGER=10;
MIN_FITNESS=0;

const DIED = "Your pet is no longer alive :("
const ERROR = new Error(DIED)

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
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS;
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
    if (this.hunger - 3 >= MIN_HUNGER) {
        this.hunger -= 3;
    }else{
         this.hunger = MIN_HUNGER;
    }

    


}

Pet.prototype.checkUp = function () {
const HUNGRY = "I am hungry"
const UNFIT = "I need a walk"
const HUNGRY_AND_UNFIT = `${HUNGRY} and ${UNFIT}`
const FINE = "I feel great!"

const isHungry = this.hunger >= 5
const isUnfit = this.fitness <= 3

    if (isHungry && isUnfit)return HUNGRY_AND_UNFIT;
    
    if (isUnfit) return UNFIT;
    
    if (isHungry) return HUNGRY;
    return FINE;
    

}



Pet.prototype.haveBaby=function(babyname){
    const child =new Pet(babyname)
    this.children.push(child);
    
 }
 

const parent = new Pet ();





module.exports = Pet;