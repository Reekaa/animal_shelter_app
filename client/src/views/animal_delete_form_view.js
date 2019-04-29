const Books = require('../models/books.js');

class BooksUpdateFormView{

  constructor(element){
    this.element = element;
  }

  bindEvent() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newBook = {};
      newBook.title = evt.target['title'].value;
      newBook.publication_date = evt.target['publication-date'].value;
      newBook.main_character = evt.target['main-character'].value;
      const id = evt.target['id'].value;

      const books = new Books();
      books.updateBook(id, newBook);

      this.element.reset();
    });
  }
}

module.exports = BooksUpdateFormView;
