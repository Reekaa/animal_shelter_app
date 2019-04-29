const Animals = require("./models/animals.js");
const AnimalsView = require("./views/animals_view.js");
const AnimalsFormView = require("./views/animals_form_view.js");
const UpdateAnimalsFormView = require("./views/update_animals_form_view.js");

document.addEventListener("DOMContentLoaded", () => {

  const animalView = new AnimalsView();
  animalView.bindEvent();

  const animalFormView = new AnimalsFormView();
  animalFormView.bindEvent();

  const updateAnimalView = new UpdateAnimalsFormView();
  updateAnimalView.bindEvent();

  const animals = new Animals();
  animals.getData();
});
