const Animals = require("./models/animals.js");
const AnimalsView = require("./views/animals_view.js");
const AnimalsFormView = require("./views/animals_form_view.js");
const UpdateAnimalsFormView = require("./views/update_animals_form_view.js");
const AnimalsSearchView = require("./views/animals_search_view.js");
// const AdoptedAnimalsView = require("./views/adopted_animals_view.js");

document.addEventListener("DOMContentLoaded", () => {

  // const adoptedAnimals = new AdoptedAnimalsView();
  // adoptedAnimals.bindEvent();

  const animalView = new AnimalsView();
  animalView.bindEvent();

  const animalFormView = new AnimalsFormView();
  animalFormView.bindEvent();

  const updateAnimalView = new UpdateAnimalsFormView();
  updateAnimalView.bindEvent();

  const animalSearch = new AnimalsSearchView();
  animalSearch.bindEvent();

  const animals = new Animals();
  animals.bindEvent();
  animals.getData();
});
