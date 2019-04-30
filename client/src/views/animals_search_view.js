const PubSub = require('../helpers/pub_sub.js');

class AnimalSearchView {

  constructor() {
    this.searchByNameInput = document.querySelector('#search-by-name');
    this.searchByTypeInput = document.querySelector('#search-by-type');

  }

  bindEvent() {
    this.searchByNameInput.addEventListener('keyup', (evt) => {
      if(evt.keyCode === 13){
        const name = this.searchByNameInput.value;
        PubSub.publish('AnimalsSearchView:search-by-name-submitted', name);
      }
    });
    this.searchByTypeInput.addEventListener('keyup', (evt) => {
      if(evt.keyCode === 13){
        const type = this.searchByTypeInput.value;
        PubSub.publish('AnimalsSearchView:search-by-type-submitted', type);
      }
    });
  }

  getSearchData(data){

  }

}

module.exports = AnimalSearchView;
