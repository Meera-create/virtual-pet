const Pet = require('../src/pet');

describe('constructor',()=>{
    it('returns an object',()=>{
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    })
   

    it('sets the name property',()=>{
        const myPet = new Pet('Fido');
        expect(myPet.name).toEqual('Fido');
    })


    it('has an initial age of 0',()=>{
        const myPet = new Pet('Fido');
        expect(myPet.age).toEqual(0);
    })
})

describe('growUp',()=>{
    it('increments the age by 1',()=>{
        const myPet = new Pet('Fido');
        myPet.growUp();
        expect(myPet.age).toEqual(1);
        expect(myPet.hunger).toEqual(5);
        expect(myPet.fitness).toEqual(3);
    })
})



describe('fitness',()=>{
  it('increases fitness by walking by 4',()=>{
    const myPet=new Pet('Fido');
    myPet.fitness=4;
    myPet.walk();
    expect(myPet.fitness).toEqual(8);
  })

})

describe('feed',()=>{
    it('decrease hunger level by 3, minimum hunger is 0',()=>{
        const myPet = new Pet('Fido');
        myPet.hunger=10;
        myPet.feed();
        expect(myPet.hunger).toEqual(7);
        
    })
})


describe('checkup',()=>{
  it('returns statement if fitness is below 3',()=>{
    const myPet = new Pet('Fido');
    myPet.fitness=2;
    myPet.hunger=4;
    myPet.checkUp();
    expect(myPet.checkUp()).toBe("I need a walk")
  })

  it('returns statement if hunger is over 5 ',()=>{
    const myPet = new Pet('Fido');
    myPet.fitness=7;
    myPet.hunger=7;
    myPet.checkUp();
    expect(myPet.checkUp()).toEqual("I am hungry")
  })
  it('returns statement if hunger is over 5 and fitness is below 3 ',()=>{
    const myPet = new Pet('Fido');
    myPet.fitness=2;
    myPet.hunger=7;
    myPet.checkUp();
    expect(myPet.checkUp()).toEqual("I am hungry AND I need a walk")
  })
  it('returns statement if hunger is over 5 and fitness is below 3 ',()=>{
    const myPet = new Pet('Fido');
    myPet.fitness=5;
    myPet.hunger=4;
    myPet.checkUp();
    expect(myPet.checkUp()).toEqual("I feel great!")
  })
})





//REFACTORING MY CODE
//describe('constructor',()=>{
  //  it('initial hunger of 0',()=>{
    //    const pet = new Pet('Fido');
     //   expect(pet.hunger).toEqual(0);
    //})
//})

//describe('growUp',()=>{
  //  it('increases hunger by 5',()=>{
    //    const pet = new Pet('Fido');
      //  pet.growUp()
        //expect(pet.hunger).toEqual(5);
   // })
//})

//describe('constructor',()=>{
  //  it('initial fitness of 0',()=>{
    //    const pet = new Pet('Fido');
      //  expect(pet.fitness).toEqual(0);
    //})
//})

//describe('growUp',()=>{
  //  it('increases fitness by 3',()=>{
    //    const pet = new Pet('Fido');
      //  pet.growUp();
    //    expect(pet.fitness).toEqual(3);
   // })
//})

//describe('walk',()=>{
  //  const pet=new Pet('Fido');
    //expect(pet.fitness).toEqual(0);

//})

