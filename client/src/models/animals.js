const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

class Animals {
  constructor() {
    this.data = null;
  }

  filterAnimalData(animals){
  //   const filteredAnimals = animals.filter(animal => animal.adopted === true)
  //   filteredAnimals.forEach((adoptedAnimal) => {
  //     const animalCard = this.createCard(adoptedAnimal);
  //     this.container.appendChild(animalCard);
  //   })
  // }

    const filteredAnimals = animals.adopted
      if(filteredAnimals === true){
        filteredAnimals.forEach((adoptedAnimal) => {
          const animalCard = this.createCard(adoptedAnimal);
          this.container.appendChild(animalCard);
      })
        }else{
          const animalCard = this.createCard(adoptedAnimal);
          this.container.appendChild(animalCard);
        }
  }


  bindEvent() {
    PubSub.subscribe('AnimalsSearchView:search-data-submitted', (evt) => {
      const searchField = evt.detail.searchField;
      const searchValue = evt.detail.searchValue;
      this.getAnimalDataBySearch(searchField, searchValue);
    })

    PubSub.subscribe('AdoptionFormView: adoption-form-submitted', (evt) => {
      const adoption = evt.detail
      this.updateAdoption(adoption);
    })

  }

  getAnimalDataBySearch(searchField, searchValue) {
    const url = `http://localhost:3000/animals/search?${searchField}=${searchValue}`;
    const request = new RequestHelper(url);
    request.get()
      .then(data => {
        this.data = data;
        PubSub.publish("Animals:animal-data-loaded", this.data);
      })
      .catch(message => {
        console.error(message);
      });
  }

  getData() {
    const url = "http://localhost:3000/animals";
    const request = new RequestHelper(url);
    request.get()
      .then(data => {
        this.data = data;
        PubSub.publish("Animals:animal-data-loaded", this.data);
      })
      .catch(message => {
        console.error(message);
      });
  }

  addAnimal(animal){
    const url = "http://localhost:3000/animals";
    const request = new RequestHelper(url);
    request.post(animal)
      .then((animals) => {
        PubSub.publish('Animals:animal-data-loaded', animals);
        this.getData();
      })
      .catch(console.error);
  }

  updateAnimal(id, animal) {
    const url = `http://localhost:3000/animals/${id}`;
    const request = new RequestHelper(url);
    request
      .put(animal)
      .then(animals => {
        PubSub.publish("Animals:animals-data-loaded", animals);
        this.getData();
      })
      .catch(console.error);
  }

  deleteAnimal(id) {
    const url = `http://localhost:3000/animals/${id}`;
    const request = new RequestHelper(url);
    request
      .delete()
      .then(animals => {
        PubSub.publish("Animals:animal-data-loaded", animals);
        this.getData();
      })
      .catch(console.error);
  }

  updateAdoption(id) {
    const url = `http://localhost:3000/animals/adopt/${id}`;
    const request = new RequestHelper(url);
    request
      .put()
      .then(animals => {
        PubSub.publish("Animals:animal-data-loaded", animals);
        this.getData();
      })
      .catch(console.error);
  }

}

module.exports = Animals;
