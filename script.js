 

const myLibrary = [
    {
        "title":"Lord of the Rings",
        "author":"J.R.R. Tolkien",
        "pages": 255,
        "status": true 
    },
    {
        "title":"Jujutsu Kaisen",
        "author": "Carturesti",
        "pages": 355,
        "status": false
    }

];
const content = document.getElementById('content');
const modal = document.getElementById('modal');
const addBookButton = document.getElementById('addBookButton');
const form = document.getElementById('form');


function Book(title, author, pages, status){
    this.title  = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}

addBookButton.addEventListener('click' , function(){
    modal.style.display = "flex";
});

form.addEventListener('submit', function(event){

    event.preventDefault();

    const title = document.getElementById('name').value ;
    const author = document.getElementById('author').value ;
    const pages = parseInt(document.getElementById('pages').value);
    const status = document.getElementById('status').checked ;

    const newBook = new Book(title, author, pages, status);

    console.log(newBook)
    
    myLibrary.splice(0, 0 , newBook);

    render();

    modal.style.display="none";

    
})

function addBookToLibrary(book){
    myLibrary.push(book);
}

function remove(book){
    const index =  myLibrary.indexOf(book);
    if(index !== -1){
        myLibrary.splice(index,1);
        render();
    }
}

function checkStatus(readButton, book){
    if(book.status === true ){
        readButton.textContent = "Citita"
    }else{
        readButton.textContent = "Necitita"
    }
}

function changeStatus(readButton, book) {
    if (book.status === true) {
        book.status = false;
    } else if (book.status === false) {
        book.status = true;
    }

    checkStatus(readButton, book);
}

function changeColor(readButton, book, bookBody ){
    if(book.status === true){
        readButton.style.background = "#66bfbf";
        bookBody.style.borderLeft="4px solid #66bfbf"
        bookBody.style.borderTopLeftRadius = "22px";
        bookBody.style.borderBottomLeftRadius = "22px";
    }else{
        readButton.style.background = "#f76b8a";
        bookBody.style.borderLeft="4px solid #f76b8a";
        bookBody.style.borderTopLeftRadius = "22px";
        bookBody.style.borderBottomLeftRadius = "22px";
    }
}
function render(){
    content.innerHTML = " "; 

    myLibrary.forEach(book => {

    const bookBody = document.createElement('div');
    const upBookBody = document.createElement('div');
    const downBookBody = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div'); 
    const pages = document.createElement('div');  
    const deleteButton = document.createElement('button');
    const readButton = document.createElement('button');
      
  
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;  
    deleteButton.textContent = "Sterge carte";

    content.appendChild(bookBody);
    bookBody.appendChild(upBookBody);
    bookBody.appendChild(downBookBody);
    upBookBody.appendChild(title);
    upBookBody.appendChild(author);
    upBookBody.appendChild(pages);
    downBookBody.appendChild(deleteButton);
    downBookBody.appendChild(readButton);

    
    checkStatus(readButton,book);
    changeColor(readButton,book,bookBody);
    deleteButton.addEventListener('click', function(){
        remove(book);
    });

    readButton.addEventListener('click', function(){
        changeStatus(readButton, book); 
        changeColor(readButton, book, bookBody)
    });

   
    })
}

render();
