const cardContainer = document.querySelector('.card-container');
const bookTitle = document.querySelector('.card-content-title');
const bookAuthor = document.querySelector('.card-content-author');
const bookPages = document.querySelector('.card-content-pages');
const main = document.querySelector('.main')

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages}, ${read}`;
    }
}

// console.log(theHobbit.info())
// function addBookToLibrary() {}
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '467', 'read');
const starWars = new Book('Star Wars-Thrawn', 'Zahn Timothy', '877', 'read');
const harryPotter = new Book('Harry Potter ', 'J.K. Rowling', '332', 'read');

let myLibrary = [theHobbit, starWars, harryPotter];


function createDiv() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('card-container')
    main.appendChild(newDiv)
}


for (let i = 0; i < myLibrary.length; i++) {
    createDiv();
}