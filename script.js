const myLibrary= [];

function Book(title, author, read){
    this.id= crypto.randomUUID();
    this.title= title;
    this.author= author;
    this.read = read;
}

function addBookToLibrary(title, author, read){
    
    myLibrary.push(new Book(title, author, read));
}