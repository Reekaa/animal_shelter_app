const PubSub = require('../helpers/pub_sub.js');

class AnimalSearchView {

  constructor() {
    this.searchByNameInput = document.querySelector('#search-by-name');
  }

  bindEvent() {
    this.searchByNameInput.addEventListener('keyup', (evt) => {
      if(evt.keyCode === 13){
        const name = this.searchByNameInput.value;
        PubSub.publish('AnimalsSearchView:search-by-name-submitted', name);
      }
    });
  }

}

module.exports = AnimalSearchView;
