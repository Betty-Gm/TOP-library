const myLibrary= [];
let bookContainer= document.querySelector(".book-container");

function Book(title, author, page, read){
    this.id= crypto.randomUUID();
    this.title= title;
    this.author= author;
    this.page= page;
    this.read = read;
}

function addBookToLibrary(title, author, page, read){
    
    myLibrary.push(new Book(title, author, page, read));
    console.log(displayBooks(myLibrary));
}



function displayBooks(myLibrary){
    
    bookContainer.textContent= "";
    for(let a=0; a<myLibrary.length; a++){
       
        let bookCard= document.createElement("div");

        bookCard.dataset.id= myLibrary[a].id;

        let list= document.createElement("ul");
        let title= document.createElement("li");
        let author= document.createElement("li");
        let page= document.createElement("li");
        let read= document.createElement("li");
        let removebtn= document.createElement("button");

        title.textContent= myLibrary[a].title;
        author.textContent= myLibrary[a].author;
        page.textContent= myLibrary[a].page;
        read.textContent= myLibrary[a].read;
        removebtn.textContent= "Remove Book";

        list.appendChild(title);
        list.appendChild(author);
        list.appendChild(page);
        list.appendChild(read);

        bookCard.appendChild(list);
        bookCard.appendChild(removebtn);
        bookContainer.appendChild(bookCard);

    }

}

// adding event listener for remove book button
bookContainer.addEventListener("click",(e)=>{
    if (e.target.tagName==="BUTTON"){
       
        const card= e.target.closest("[data-id]");

       // bookContainer.removeChild(card);
       const bookId = card.dataset.id;
       const index= myLibrary.findIndex((obj)=>obj.id=== bookId);
       myLibrary.splice(index,1);
       displayBooks(myLibrary);
        
    }


});

// adding a "new book" button
function renderForm(){
    const sidebar= document.querySelector(".sidebar");
    sidebar.innerHTML= `
      <form id= "dynamic-form" action= "#" method= "post">
        <h3>New Book</h3>
        <label for="titleid">Title</label>
        <input type="text" id="titleid">
        <label for="authorid">Author</label>
        <input type="text" id="authorid">
        <label for="pageid">Number of pages</label>
        <input type="number" name="" id="pageid">
        <label for="readid">reading status</label>
        <input type="text" id="readid">


        <button id="submit-id" type= "button">Submit</button>
        <button id = "cancel-id">Cancel</button>

        
    </form>
    `

    const submitBtn= document.getElementById("submit-id");
    const cancelBtn= document.getElementById("cancel-id");
    

    const titleBtn= document.getElementById("titleid");
    const authorBtn= document.getElementById("authorid");
    const pageBtn= document.getElementById("pageid");
    const readBtn= document.getElementById("readid");
    submitBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        addBookToLibrary(titleBtn.value, authorBtn.value, pageBtn.value, readBtn.value);
        titleBtn.value="";
        authorBtn.value= "";
        pageBtn.value= 0;
        readBtn.value= "";

    });
    cancelBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        titleBtn.value="";
        authorBtn.value= "";
        pageBtn.value= "";
        readBtn.value= "";
    })



}

 const newBookBtn= document.getElementById("newbook-id");
 newBookBtn.addEventListener("click", ()=>{
    renderForm();

 });