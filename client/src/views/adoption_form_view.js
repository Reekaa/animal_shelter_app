const PubSub = require("../helpers/pub_sub.js");
const Animals = require("../models/animals.js");

class AdoptionFormView {

  constructor(){
    this.element = document.querySelector('.adoption-form');
  }

  bindEvent(){
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const adoption = {}
      adoption.owner = evt.target['owner-select'].value;
      adoption.animals = evt.target['animals'].value;
      adoption.id = evt.target['id'].value;
      console.log(adoption);


      // PubSub.publish('AdoptionFormView: submited-form')


    })
  }

}
module.exports = AdoptionFormView;
