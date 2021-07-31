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

//UI class
class UI
{
    contructor()
    {

    }
    addToBookList(book)
    {
    
        let list=document.querySelector('#book-list');

        let row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`
        
        list.appendChild(row);
        
        console.log(row);
    }
    
    clearFields()
    {
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
        
    }
}


// Event Listener

form.addEventListener('submit',newBook);



// Define function

function newBook(e)
{
    let title=document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let isbn=document.querySelector('#isbn').value;

    if(title===''|| author===''|| isbn==='' )
    {
        alert('Fleid are empty..Please fillup the form! ')
    }

    else
    {

        let book=new Book(title,author,isbn);//This book
    
        let ui=new UI();//calling ui class inside new ui variable 
        ui.addToBookList(book) ;///here the book variable is called .... calling the function addToBookList

        ui.clearFields()
    }

    

    e.preventDefault();
}