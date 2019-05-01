const Animals = require('../models/animals.js');

class UpdateAnimalsFormView{

  constructor(){
    this.element = document.querySelector('#update-animal-form')
  }

  bindEvent() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const animal = {};
      animal.name = evt.target['name'].value;
      animal.image_url = evt.target['image-url'].value;
      animal.type = evt.target['type'].value;
      animal.breed = evt.target['breed'].value;
      animal.age = evt.target['age'].value;
      animal.gender = evt.target['gender'].value;
      animal.adopted = evt.target['select'].value;
      const id = evt.target['id'].value;

      const animals = new Animals();
      animals.updateAnimal(id, animal);

      this.element.reset();
    });
  }
}

module.exports = UpdateAnimalsFormView;
