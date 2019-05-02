const Animals = require("../models/animals.js");
const AnimalsView = require("../views/animals_view.js");

describe('animals test' , () => {

  let animals;
  let animalsData;

  beforeEach( () => {

    animalsData = [
      {
    id: 1,
    name: "Chilli",
    image_url: "vizsla1.jpg",
    type: "dog",
    breed: "vizsla",
    age: 2,
    gender: "male",
    adopted: true
    },
    {
    id: 2,
    name: "Kiwi",
    image_url: "labrador1.jpg",
    type: "dog",
    breed: "labrador",
    age: 5,
    gender: "female",
    adopted: true
    },
    {
    id: 3,
    name: "Bob",
    image_url: "labrador2.jpg",
    type: "dog",
    breed: "labrador",
    age: 1,
    gender: "male",
    adopted: true
    },
    {
    id: 4,
    name: "Cutie",
    image_url: "vizsla2.jpg",
    type: "dog",
    breed: "vizsla",
    age: 6,
    gender: "female",
    adopted: true
    },
    {
    id: 5,
    name: "Red",
    image_url: "labrador2.jpg",
    type: "dog",
    breed: "vizsla",
    age: 5,
    gender: "male",
    adopted: false
    },
    {
    id: 6,
    name: "Avocado",
    image_url: "vizsla2.jpg",
    type: "dog",
    breed: "labrador",
    age: 3,
    gender: "female",
    adopted: false
    }];

    animals = new Animals();

  });

  test('animals should be adopted', () => {
    const result = animals.filterAnimalData(animalsData, true);
    expect(result.length).toBe(4);
  });

  test('animals should be awaiting for adoption', () => {
    const result = animals.filterAnimalData(animalsData, false);
    expect(result.length).toBe(2);
  });

});
