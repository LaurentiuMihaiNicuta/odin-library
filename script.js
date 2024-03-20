
class Book{
    constructor(title,author,pages,status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        
    }

}

class UI {

    

    constructor(){

        this.container = document.getElementById('book-container')
        this.addButton = document.getElementById('add-btn');
        this.modal = document.getElementById('modal');
        this.form = document.getElementById('form');
        this.ButtonListener(); 
        this.UILibrary = usedLibrary.getArraylibrary();

    }

    render = () => {
        this.container.innerHTML = " ";

        

        this.UILibrary.forEach(book => {
            
            const bookContainerContent = document.createElement('div');
            const bookContainerFooter = document.createElement('div');
            const bookContainer = document.createElement('div');

            const deleteButton = document.createElement('button');
            const status = document.createElement('button');

            deleteButton.textContent = 'Delete Book';
            deleteButton.classList.add('btn-danger')
            status.textContent = book.status;
            status.classList.add('btn-info')

            this.container.appendChild(bookContainer);

            
            bookContainer.appendChild(bookContainerContent);
            bookContainer.appendChild(bookContainerFooter);



            Object.values(book).slice(0,3).forEach(value => { 
                const div = document.createElement('div');
                div.textContent = value;
                bookContainerContent.appendChild(div);
            });
            
           bookContainerFooter.appendChild(deleteButton);
           bookContainerFooter.appendChild(status);
            
           deleteButton.addEventListener('click' , () => {
            this.delete(this.UILibrary,book)
           })

           status.addEventListener('click' , () => {
            this.changeStatus(book)
           
           })

        });

    
        
    }

    changeStatus = (book) => {
        book.status = !book.status;
        this.render();
       
    }

 
 

    delete = (library,book) => {
        
        let index = library.indexOf(book);;
        library.splice(index,1);
        this.render();
    }   

    ButtonListener = () => {
        this.addButton.addEventListener('click', e => this.openModal());
        this.form.addEventListener('submit', this.submitForm,) ;

    }

     openModal = () => {
        console.log('am deschis modalul')
        this.modal.style.display = "flex";
        
     }
    
    submitForm = (event) => {

        event.preventDefault();
        
        const title = document.getElementById('name').value ;
        const author = document.getElementById('author').value ;
        const pages = document.getElementById('pages').value;
        const status = document.getElementById('status').checked ;
    
        const newBook = new Book(title, author, pages, status);
        
        usedLibrary.addToLibrary(newBook);

        this.UILibrary = usedLibrary.getArraylibrary();

        this.render();
        
        this.modal.style.display = 'none';

        this.form.reset();

    }
}

class Library{
    constructor(){
        this.arrayLibrary = [];


    }

    addToLibrary = (book) => {
        
        this.arrayLibrary.splice(0,0,book);
       
    }

    getArraylibrary = () => { return this.arrayLibrary }

}

let harryPotter = new Book("Harry Potter","J.K ROWLING",255,true);
let hobbit = new Book("Hobbit","J.R.R TOLKIEN",212,false);

const usedLibrary = new Library();
const userInterface = new UI();

usedLibrary.addToLibrary(harryPotter);
usedLibrary.addToLibrary(hobbit);


userInterface.render();

