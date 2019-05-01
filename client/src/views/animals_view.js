const PubSub = require("../helpers/pub_sub.js");
const Animals = require("../models/animals.js");


class AnimalsView {

  constructor() {
    this.container = document.querySelector("#animal-container");
  }

  bindEvent() {
    PubSub.subscribe("Animals:animal-data-loaded", (evt) => {
      const animals = evt.detail;
      this.render(animals);
    })
  }

  render(animals) {
    this.clearAnimals();

    animals.forEach((animal) => {
      const animalCard = this.createCard(animal);
      this.container.appendChild(animalCard);

    });
  }

  clearAnimals() {
    this.container.innerHTML = "";
  }

  createCard(animal) {

    const header = this.createHeader(animal);

    const image = this.createImage(animal);

    const animalData = this.createDataForAnimal(animal);

    const adoptionButton = this.createAdoptionButton(animal);

    const deleteButton = this.createDeleteButton(animal);

    const content = this.createContent(animal);

    const card = this.createCardForAnimals(animal);

    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(animalData);
    content.appendChild(adoptionButton);
    content.appendChild(deleteButton);
    card.appendChild(content);

    return card;
  }

  createHeader(animal){
    const header = document.createElement("a");
      header.innerHTML = `${animal.name}`;
      header.onclick = function(){
        document.getElementById('update-animal-form').elements['id'].value = animal.id;
        document.getElementById('update-animal-form').elements['name'].value = animal.name;
        document.getElementById('update-animal-form').elements['image-url'].value = animal.image_url;
        document.getElementById('update-animal-form').elements['type'].value = animal.type;
        document.getElementById('update-animal-form').elements['breed'].value = animal.breed;
        document.getElementById('update-animal-form').elements['age'].value = animal.age;
        document.getElementById('update-animal-form').elements['gender'].value = animal.gender;
        document.getElementById('update-animal-form').elements['select'].value = animal.adopted;
        }

      return header;
  }

  createImage(animal){
    const image = document.createElement('img');
      image.src = `/images/${animal.image_url}`;

    return image;
  }

  createDataForAnimal(animal){
    const meta = document.createElement("div");
      meta.classList.add("meta");
      meta.innerHTML = `<span><b>Type:</b> ${animal.type} <br> <b>Breed:</b> ${animal.breed} <br> <b>Age:</b> ${animal.age} <br>
      <b>Gender:</b> ${animal.gender}</span>`;

    return meta;
  }

  createAdoptionButton(animal){
    const adoptionClick = document.createElement("button");
      adoptionClick.classList.add("button");
        adoptionClick.id = animal.id;
          let displayText = "Awaiting for adoption"
            if (animal.adopted) {
              displayText = "Adopted"
            }
          adoptionClick.innerHTML = `${displayText}`

      adoptionClick.addEventListener('click', (evt) =>{
        const adoptionForm = document.querySelector(".adoption-form");
        adoptionForm.classList.remove("hide");
        adoptionForm.classList.add("show");
      })

      adoptionClick.onclick = function(){
        document.querySelector(".adoption-form").elements["animals"].value = animal.name;
        document.querySelector(".adoption-form").elements["id"].value = animal.id;
      }

    return adoptionClick;
  }

  createDeleteButton(animal){
    const deleteButton = document.createElement("button");
      deleteButton.id = animal.id;
      deleteButton.classList.add("button");
      deleteButton.innerHTML = 'Delete';
      deleteButton.className += "ui button delete-button";

    deleteButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      const animalId = evt.target.id;
      const animals = new Animals();
      animals.deleteAnimal(animalId);

    });

    return deleteButton;

  }

  createContent(animal){
    const content = document.createElement("div");
      content.classList.add("content");

    return content;
  }

  createCardForAnimals(animal){
    const card = document.createElement("div");
      card.classList.add("ui");
      card.classList.add("card");

    return card;
  }

}

module.exports = AnimalsView;
