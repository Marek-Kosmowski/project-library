const main = document.querySelector('.main');




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





function getBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('h3');
        const pages = document.createElement('h3');
        const status = document.createElement('h3');

        const titlePara = document.createElement('p');
        const authorPara = document.createElement('p');
        const pagesPara = document.createElement('p');

        title.innerText = 'Title:';
        author.innerText = 'Author:';
        pages.innerText = 'Pages:';
        status.innerText = 'Read/Unread';
        titlePara.innerText = myLibrary[i].title;
        authorPara.innerText = myLibrary[i].author;
        pagesPara.innerText = myLibrary[i].pages;

        main.appendChild(newCard);
        newCard.classList.add('card-container-new');

        newCard.appendChild(title);
        newCard.appendChild(titlePara)
        newCard.appendChild(author);
        newCard.appendChild(authorPara);
        newCard.appendChild(pages);
        newCard.appendChild(pagesPara);
        newCard.appendChild(status);



    }

}


window.addEventListener('onload', getBooks());