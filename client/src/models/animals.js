const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

class Animals {
  constructor() {
    this.data = null;
  }

  bindEvent() {
    PubSub.subscribe('AnimalsSearchView:search-by-name-submitted', (evt) => {
      const name = evt.detail;
      console.log(name);
      this.getAnimalData(name);
    })
  }

  getAnimalData(name) {
    const url = `http://localhost:3000/animals/search?name=${name}`;
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
    console.log(id);
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
    const request = new RequestHelper(url);
    request
      .delete()
      .then(animals => {
        PubSub.publish("Animals:animal-data-loaded", animals);
      })
      .catch(console.error);
  }
}

module.exports = Animals;
