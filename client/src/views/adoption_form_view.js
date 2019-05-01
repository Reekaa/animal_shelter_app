const PubSub = require("../helpers/pub_sub.js");
const Animals = require("../models/animals.js");

class AdoptionFormView {

  constructor(){
    this.element = document.querySelector('.adoption-form');
  }

  bindEvent(){
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const adoptionId = evt.target['id'].value;
      PubSub.publish('AdoptionFormView: submited-form')
    })
  }

}
module.exports = AdoptionFormView;
