const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

class Animals {
  constructor() {
    this.data = null;
  }

  bindEvent() {
    PubSub.subscribe('AnimalsSearchView:search-data-submitted', (evt) => {
      const searchField = evt.detail.searchField;
      const searchValue = evt.detail.searchValue;
      this.getAnimalDataBySearch(searchField, searchValue);
    })

    PubSub.subscribe('AdoptionFormView: adoption-form-submitted', (evt) => {
      const adoption = evt.detail
      console.log(adoption);
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
      })
      .catch(console.error);
  }

  deleteAnimal(id) {
    const url = `http://localhost:3000/animals/${id}`;
    console.log(url);
    const request = new RequestHelper(url);
    request
      .delete()
      .then(animals => {
        PubSub.publish("Animals:animal-data-loaded", animals);
      })
      .catch(console.error);
  }

  updateAdoption(id) {
    const url = `http://localhost:3000/animals/adopt/${id}`;
    console.log(url);
    const request = new RequestHelper(url);
    request
      .put()
      .then(animals => {

        
        PubSub.publish("Animals:animals-data-loaded-adopted", animals);
        PubSub.publish("Animals:animals-data-loaded-notadopted", animals);
      })
      .catch(console.error);
  }

}

module.exports = Animals;
