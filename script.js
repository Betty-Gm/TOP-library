const myLibrary= [];

function Book(title, author, page, read){
    this.id= crypto.randomUUID();
    this.title= title;
    this.author= author;
    this.page= page;
    this.read = read;
}

function addBookToLibrary(title, author, page, read){
    
    myLibrary.push(new Book(title, author, page, read));
}

// manually adding some books to see the display
console.log(addBookToLibrary("title", "author", 125, "Already Read"));
console.log(addBookToLibrary("title2", "author", 125, "Already Read"));

let bookContainer= document.querySelector(".book-container");

function displayBooks(myLibrary){
    
    for(let a=0; a<myLibrary.length; a++){

        let bookCard= document.createElement("div");
        let list= document.createElement("ul");
        let title= document.createElement("li");
        let author= document.createElement("li");
        let page= document.createElement("li");
        let read= document.createElement("li");

        title.textContent= myLibrary[a].title;
        author.textContent= myLibrary[a].author;
        page.textContent= myLibrary[a].page;
        read.textContent= myLibrary[a].read;

        list.appendChild(title);
        list.appendChild(author);
        list.appendChild(page);
        list.appendChild(read);
        bookCard.appendChild(list);
        bookContainer.appendChild(bookCard);

    }




}
console.log(displayBooks(myLibrary));