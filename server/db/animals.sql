DROP TABLE owners;
DROP TABLE animals;

CREATE TABLE animals  (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image_url VARCHAR(100),
  type VARCHAR(255),
  breed VARCHAR(255),
  age INT,
  gender VARCHAR(255),
  adopted BOOLEAN
);

CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  adoption_id INT REFERENCES animals(id)
);

INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Chilli', 'vizsla1.jpg', 'dog', 'vizsla', 2, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Kiwi', 'labrador1.jpg', 'dog', 'labrador', 5, 'female', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Bob', 'labrador2.jpg', 'dog', 'labrador', 7, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Cutie', 'vizsla2.jpg', 'dog', 'vizsla', 6, 'female', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Red', 'bulldog.jpg', 'dog', 'bulldog', 8, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Zeus', 'dalmatian.jpg', 'dog', 'dalmatian', 10, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Happy', 'french_bulldog.jpg', 'dog', 'french bulldog', 5, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Buksi', 'puli1.jpg', 'dog', 'puli', 4, 'female', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Hero', 'puli2.jpg', 'dog', 'puli', 5, 'female', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Pogo', 'pug1.jpg', 'dog', 'pug', 1, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Spot', 'pug2.jpg', 'dog', 'pug', 8, 'female', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Sponge', 'bobtail.jpg', 'dog', 'bobtail', 4, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Roger', 'bengal1.jpg', 'cat', 'bengal', 5, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Vilma', 'himalayan.jpg', 'cat', 'himalyan', 3, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Fred', 'bengal2.jpg', 'cat', 'bengal', 3, 'female', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Sugar', 'peterbald.jpg', 'cat', 'peterbald', 5, 'female', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Rob', 'syrian.jpg', 'hamster', 'syrian', 1, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Poppy', 'fuzzyLop1.jpg', 'rabbit', 'fuzzy lop', 2, 'male', false);
INSERT INTO animals (name, image_url, type, breed, age, gender, adopted)  values('Fluffy', 'fuzzyLop2.jpg', 'rabbit', 'fuzzy lop', 3, 'male', false);


INSERT INTO owners (name)  values ('Reka');
INSERT INTO owners (name)  values ('Jenn');
INSERT INTO owners (name)  values ('Joe');
INSERT INTO owners (name)  values ('Karen');
INSERT INTO owners (name)  values ('Vera');
INSERT INTO owners (name)  values ('Bob');
INSERT INTO owners (name)  values ('Sian');
INSERT INTO owners (name)  values ('Rose');
INSERT INTO owners (name)  values ('Matt');
INSERT INTO owners (name)  values ('Ben');
