const PubSub = require('../helpers/pub_sub.js');

class AnimalSearchView {

  constructor() {
    this.searchByNameInput = document.querySelector('#search-by-name');
    this.searchByTypeInput = document.querySelector('#search-by-type');
    this.searchByBreedInput = document.querySelector('#search-by-breed');
    this.searchByAgeInput = document.querySelector('#search-by-age');

  }

  bindEvent() {
    this.searchByNameInput.addEventListener('keyup', (evt) => {
      if(evt.keyCode === 13){
        const name = this.searchByNameInput.value;

        const searchData = {
          searchField: 'name',
          searchValue: name
        }

        PubSub.publish('AnimalsSearchView:search-data-submitted', searchData);
      }
    });

    this.searchByTypeInput.addEventListener('keyup', (evt) => {
      if(evt.keyCode === 13){
        const type = this.searchByTypeInput.value;

        const searchData = {
          searchField: 'type',
          searchValue: type
        }

        PubSub.publish('AnimalsSearchView:search-data-submitted', searchData);
      }
    });

    this.searchByBreedInput.addEventListener('keyup', (evt) => {
      if(evt.keyCode === 13){
        const breed = this.searchByBreedInput.value;

        const searchData = {
          searchField: 'breed',
          searchValue: breed
        }

        PubSub.publish('AnimalsSearchView:search-data-submitted', searchData);
      }
    });

    this.searchByAgeInput.addEventListener('keyup', (evt) => {
      if(evt.keyCode === 13){
        const age = this.searchByAgeInput.value;

        const searchData = {
          searchField: 'age',
          searchValue: age
        }

        PubSub.publish('AnimalsSearchView:search-data-submitted', searchData);
      }
    });
  }

}

module.exports = AnimalSearchView;
