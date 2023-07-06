const Pet = require('../src/pet');

describe('constructor',()=>{
    it('returns an object',()=>{
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});



describe('constructor',()=>{
    it('sets the name property',()=>{
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    })
})

describe('constructor',()=>{
    it('has an initial age of 0',()=>{
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    })
})

describe('growUp',()=>{
    it('increments the age by 1',()=>{
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(3);
    })
})

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

describe('increase fitness by walking by 4',()=>{
    const pet=new Pet('Fido');
    pet.fitness=4;
    pet.walk();
    expect(pet.fitness).toEqual(8);

})