//magic numbers
const MAX_FITNESS=10;
const MIN_HUNGER=0;
const HUNGRY="I am hungry"
const UNFIT="I need a walk"
const BOTH="I am hungry AND I need a walk"
const FINE = "I feel great!"

function Pet(name) {
    this.name=name;
    this.age=0;
    this.hunger=0;
    this.fitness=0;
    
}

Pet.prototype.growUp=function(){
    this.age+=1;
    this.hunger+=5;
    this.fitness+=3;
}

Pet.prototype.walk=function(){
if (this.fitness+4<=MAX_FITNESS){
     this.fitness+=4;}
else {
    this.fitness=MAX_FITNESS;
}
}

Pet.prototype.feed=function(){
    if (this.hunger-3>=MIN_HUNGER){
        this.hunger-=3;}
    else{
        this.hunger=MIN_HUNGER;
    }
}

Pet.prototype.checkUp=function(){
    if(this.hunger>=5 && this.fitness<=3){
        return BOTH
    }
    if(this.hunger<5 && this.fitness>3){
        return FINE
    }
    if (this.fitness<=3){
        return UNFIT
    }
    if(this.hunger>=5){
        return HUNGRY }
 
}


module.exports = Pet;