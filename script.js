const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close');
const newBookBtn = document.querySelector('.new-book-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const statusInput = document.querySelector('#status');
const addBookBtn = document.querySelector('.add-book-btn');


//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages}, ${read}`;
    }
}

//Adding data to myLibrary array
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '467', 'READ');
const starWars = new Book('Star Wars-Thrawn', 'Zahn Timothy', '877', 'READ');
const harryPotter = new Book('Harry Potter ', 'J.K. Rowling', '332', 'READ');
const javaScript = new Book('JavaScript 2000', 'Moff Gideon', '987', 'READ');

let myLibrary = [theHobbit, starWars, harryPotter, javaScript];

//remove book function
function deleteBook(el) {
    const removeItem = el.target.closest('.card-container-new');
    removeItem.remove();
}
//check if clicked element on the page is input and if it contains 'remove-btn' if it does then do remove book function
function checkClass(el) {
    if (el.target.closest('input').classList.contains('remove-btn')) {
        deleteBook(el);
    } else {
        console.log('error');
    }
}

//create new book and display it on a page
function createBook() {
    const newCard = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    const status = document.createElement('h3');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('card-buttons-container');
    const removeBtn = document.createElement('input');
    removeBtn.type = 'image';
    removeBtn.classList.add('remove-btn');
    removeBtn.src = './img/trash-can-outline.svg';

    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const pagesPara = document.createElement('p');

    title.innerText = 'Title:';
    author.innerText = 'Author:';
    pages.innerText = 'Number of Pages:';
    status.innerText = 'Read/Unread';
    for (let i = 0; i < myLibrary.length; i++) {
        titlePara.innerText = myLibrary[i].title;
        authorPara.innerText = myLibrary[i].author;
        pagesPara.innerText = myLibrary[i].pages;
        status.innerText = myLibrary[i].read;
    }


    main.appendChild(newCard);
    newCard.classList.add('card-container-new');

    newCard.appendChild(title);
    newCard.appendChild(titlePara)
    newCard.appendChild(author);
    newCard.appendChild(authorPara);
    newCard.appendChild(pages);
    newCard.appendChild(pagesPara);
    newCard.appendChild(status);
    newCard.appendChild(btnContainer);
    btnContainer.appendChild(removeBtn);
}

//display all the books on the page that exist in myLibrary array 
function getBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('h3');
        const pages = document.createElement('h3');
        const status = document.createElement('h3');

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('card-buttons-container');
        const removeBtn = document.createElement('input');
        removeBtn.type = 'image';
        removeBtn.classList.add('remove-btn');
        removeBtn.src = './img/trash-can-outline.svg';

        const titlePara = document.createElement('p');
        const authorPara = document.createElement('p');
        const pagesPara = document.createElement('p');

        title.innerText = 'Title:';
        author.innerText = 'Author:';
        pages.innerText = 'Number of Pages:';
        titlePara.innerText = myLibrary[i].title;
        authorPara.innerText = myLibrary[i].author;
        pagesPara.innerText = myLibrary[i].pages;
        status.innerText = myLibrary[i].read;

        main.appendChild(newCard);
        newCard.classList.add('card-container-new');

        newCard.appendChild(title);
        newCard.appendChild(titlePara)
        newCard.appendChild(author);
        newCard.appendChild(authorPara);
        newCard.appendChild(pages);
        newCard.appendChild(pagesPara);
        newCard.appendChild(status);
        newCard.appendChild(btnContainer);
        btnContainer.appendChild(removeBtn);
    }

}

//function adding new book to the myLibrary array from users input
function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, statusInput.value.toUpperCase());
    myLibrary.push(newBook);

}

//show modal form on the page for adding books
newBookBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

//close modal after clicking Add button on a page, and disable submit form button behaviour 
addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addBookToLibrary();
    createBook();
    modal.style.display = 'none';

})



main.addEventListener('click', checkClass);

window.addEventListener('onload', getBooks());