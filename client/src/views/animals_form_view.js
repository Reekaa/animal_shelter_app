const Animals = require('../models/animals.js');
const PubSub = require("../helpers/pub_sub.js");

class AnimalsFormView{

  constructor(){
    this.element = document.querySelector('#new-animal-form');
  }

  bindEvent() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newAnimal = {};
      newAnimal.name = evt.target['name'].value;
      newAnimal.image_url = evt.target['image-url'].value;
      newAnimal.type = evt.target['type'].value;
      newAnimal.breed = evt.target['breed'].value;
      newAnimal.age = evt.target['age'].value;
      newAnimal.gender = evt.target['gender'].value;
      newAnimal.adopted = evt.target['select'].value;

      const animals = new Animals();
      animals.addAnimal(newAnimal);

      this.element.reset();
    });
  }
}

module.exports = AnimalsFormView;
