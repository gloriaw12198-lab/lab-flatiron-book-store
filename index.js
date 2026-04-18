const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!


// 1. Update the existing title
const header = document.getElementById("header");
header.textContent = bookStore.name;

// 2. Select the book list container
const bookList = document.getElementById("book-list");

// 3. Loop through books and create DOM elements
bookStore.books.forEach((book) => {

    // book container (must be li because existing structure uses ul > li)
    const bookContainer = document.createElement("li");

    // book title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    // book author
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    // book image
    const bookImage = document.createElement("img");
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;

    // append elements
    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);

    // append to list
    bookList.appendChild(bookContainer);
});

// OPTIONAL (not required but clean): remove example template item
const oldItem = document.getElementById("delete-this");
if (oldItem) oldItem.remove();