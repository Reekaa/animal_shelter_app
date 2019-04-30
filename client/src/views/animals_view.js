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
    const image = document.createElement('img');
    image.src = `/images/${animal.image_url}`;

    const meta = document.createElement("div");
    meta.classList.add("meta");
    meta.innerHTML = `<span><b>type:</b> ${animal.type} <br> <b>breed:</b> ${animal.breed} <br> <b>age:</b> ${animal.age} <br>
    <b>gender:</b> ${animal.gender}</span>`;

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
    header.appendChild(meta)

    const adoptionClick = document.createElement("button");
    adoptionClick.classList.add("button");
    adoptionClick.id = animal.id;
    adoptionClick.onclick = function(event){
      PubSub.publish('Animals:animal-adoption-click', animal.id);
    }
    let displayText = "Awaiting for adoption"
    if (animal.adopted) {
      displayText = "Adopted"
    }
    adoptionClick.innerHTML = `${displayText}`

    const deleteButton = document.createElement("button");
    deleteButton.id = animal.id;
    deleteButton.classList.add("button");
    deleteButton.innerHTML = 'Delete';

    deleteButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      const animalId = evt.target.id;
      console.log(animalId);
      const animals = new Animals();
      animals.deleteAnimal(animalId);

    })

    const content = document.createElement("div");
    content.classList.add("content");

    const card = document.createElement("div");
    card.classList.add("ui");
    card.classList.add("card");

    content.appendChild(header);
    content.appendChild(meta);
    content.appendChild(image);
    content.appendChild(adoptionClick);
    content.appendChild(deleteButton);
    card.appendChild(content);

    return card;
  }
}

module.exports = AnimalsView;
