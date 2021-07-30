// get ul element

let form=document.querySelector('#book-form');
//book class
class Book
{
    constructor(title,author,isbn)
    {
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

// Event Listener

form.addEventListener('submit',newBook);



// Define function

function newBook(e)
{
    console.log("hello");
    e.preventDefault();
}