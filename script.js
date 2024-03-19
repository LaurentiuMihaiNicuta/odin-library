
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
    }

    render = () => {
        this.container.innerHTML = " ";

        const UILibrary = usedLibrary.getArraylibrary();

        UILibrary.forEach(book => {
            
            const bookContainerContent = document.createElement('div');
            const bookContainerFooter = document.createElement('div');
            const bookContainer = document.createElement('div');

            const deleteButton = document.createElement('button');
            const status = document.createElement('button');

            deleteButton.textContent = 'Delete Book';
            deleteButton.classList.add('btn-info')
            status.textContent = book.status;

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
            this.delete(UILibrary,book)
           })

        });


        
    }

    delete = (library,book) => {
        let index = library.indexOf(book);;

        library.splice(index,1);
        
        this.render();
    }   


    
}

class Library{
    constructor(){
        this.arrayLibrary = [];


    }

    addToLibrary = (book) => {
        
        this.arrayLibrary.push(book);

    }

    getArraylibrary = () => { return this.arrayLibrary }

}

let hobit = new Book("HOOBIT","JWR",255,true);
let tvd = new Book("vampiri","belea",212,false);

const usedLibrary = new Library();
const userInterface = new UI();

usedLibrary.addToLibrary(hobit);
usedLibrary.addToLibrary(tvd);
usedLibrary.addToLibrary(hobit);


userInterface.render();

