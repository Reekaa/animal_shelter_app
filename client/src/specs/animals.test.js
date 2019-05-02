const Animals = require("../models/animals.js");
const AnimalsView = require("../views/animals_view.js");

describe('animals test' , () => {

  let animal1;
  let animal2;

  beforeEach( () => {

    animal1 = new Animals('Happy', 'url', 'dog', 'bobtail', 3, true);
    animal2 = new Animals('Chilli', 'url', 'dog', 'vizsla', 4, false);


  })

  test('animal should be adopted', () => {
    animal1.filterAnimalData();
    expect(animals.adopted).toBe(true);
  })

  test('animal should be awaiting for adoption', () => {
    animal2.filterAnimalData();
    expect(animals.adopted).toBe(false);
  })
});
