const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close');
const newBookBtn = document.querySelector('.new-book-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const statusInput = document.querySelector('#status');
const addBookBtn = document.querySelector('.add-book-btn');

const removeBookBtn = document.querySelector('.remove-btn')


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
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '467', 'read');
const starWars = new Book('Star Wars-Thrawn', 'Zahn Timothy', '877', 'read');
const harryPotter = new Book('Harry Potter ', 'J.K. Rowling', '332', 'read');
const javaScript = new Book('JavaScript 2000', 'Moff Gideon', '987', 'read');

let myLibrary = [theHobbit, starWars, harryPotter, javaScript];


function deleteBook(el) {
    const removeItem = el.target.closest('.card-container-new');
    removeItem.remove();
}

function checkClass(el) {
    if (el.target.closest('input').classList.contains('remove-btn')) {
        deleteBook(el);
    } else {
        console.log('error');
    }
}



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
        newCard.appendChild(btnContainer);
        btnContainer.appendChild(removeBtn);
    }

}



function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, statusInput.value);
    myLibrary.push(newBook);

}

// function displayBooks(){
//     myLibrary[]
// }

newBookBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

// closeModalBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// })

// addBookBtn.addEventListener('click', addBookToLibrary());

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addBookToLibrary();
    createBook();
    console.log(myLibrary);
    modal.style.display = 'none';

})

// removeBookBtn.addEventListener('click', () => {
//     console.log('works!')
// });

main.addEventListener('click', checkClass);

window.addEventListener('onload', getBooks());