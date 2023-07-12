const Pet = require('../src/pet');
const Parent = require('../src/pet');

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
        expect(myPet.fitness).toEqual(7);
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
  it('throws an error if my pet is dead',()=>{
    const myPet = new Pet('Fido');
    myPet.age=30;
    expect(()=>myPet.feed()).toThrow('Your pet is no longer alive :(')
  });

    it('decrease hunger level by 3, minimum hunger is 0',()=>{
        const myPet = new Pet('Fido');
        myPet.hunger=9;
        myPet.age=0;
        myPet.feed();
        expect(myPet.hunger).toEqual(6);
    });
 
});


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

describe('isAlive',()=>{
  it('if fitness is 0 or less, returns false',()=>{
    const myPet=new Pet ('Fido');
    myPet.fitness=0
  expect(myPet.isAlive).toEqual(false)
  })

it('if hunger is 10 or more, returns false',()=>{
  const myPet=new Pet('Fido');
  myPet.hunger=10;
expect(myPet.isAlive).toEqual(false);
})


it('if age is 30 or more, returns false',()=>{
  const myPet=new Pet('Fido');
  myPet.age=30;
 expect(myPet.isAlive).toEqual(false);
})

it('age,fitness and hunger are all fine, return true',()=>{
  const myPet=new Pet('Fido');
  myPet.age=29;
  myPet.fitness=1;
  myPet.hunger=9;
 expect(myPet.isAlive).toEqual(true);
})

})

describe('parent pet',()=>{
  it('parent pet instance of Pet',()=>{
    const parent=new Pet ('Fiona');
    expect(parent.name).toEqual('Fiona');
  })

  it('adds child name to children array',()=>{
    const parent=new Pet('Fiona');
    parent.haveBaby('Lisa');
    const child=new Pet('Lisa');
    parent.children=['Lisa']
    expect(child.name).toEqual('Lisa')
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

