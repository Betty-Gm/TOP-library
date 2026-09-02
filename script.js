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
        //bookCard.classList.add("card");

        bookCard.dataset.id= myLibrary[a].id;

        let list= document.createElement("ul");
        let title= document.createElement("li");
        let author= document.createElement("li");
        let page= document.createElement("li");
        let read= document.createElement("li");
        read.classList.add("toggle");
        let removebtn= document.createElement("button");

        title.textContent= "Title: " + myLibrary[a].title;
        author.textContent= "Author: "+myLibrary[a].author;
        page.textContent= "Number of Pages: "+myLibrary[a].page;
        read.textContent= "Already Read: " + myLibrary[a].read;
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

bookContainer.addEventListener("click",(e)=>{
    if (e.target.tagName==="BUTTON"){
       
        const card= e.target.closest("[data-id]");

       // bookContainer.removeChild(card);
       const bookId = card.dataset.id;
       const index= myLibrary.findIndex((obj)=>obj.id=== bookId);
       myLibrary.splice(index,1);
       displayBooks(myLibrary);
        
    }
    if (e.target.classList.contains("toggle")){
        const card= e.target.closest("[data-id]");
        const bookId= card.dataset.id;
        const index= myLibrary.findIndex((obj)=>obj.id==bookId);
        myLibrary[index].toggleRead();
        displayBooks(myLibrary);
        
    }


});

// adding a "new book" button
function renderForm(){
    const sidebar= document.querySelector(".sidebar");
    sidebar.innerHTML= `
      <form id= "dynamic-form" action= "#" method= "post">
        <h3>New Book</h3>
        <div>
        <label for="titleid">Title</label>
        <input type="text" id="titleid">
        </div>
        <div>
        <label for="authorid">Author</label>
        <input type="text" id="authorid">
        </div>
        <div>
        <label for="pageid">Number of pages</label>
        <input type="number" name="" id="pageid">
        </div>
        <div>
        <label for="readid">Already Read</label>
        <input type="radio" value="True" id="true" name = "readingStatus" >
        <label for ="true" >True</label>
        <input type="radio" value= "False" id="false" name = "readingStatus" >
        <label for ="false" >false</label>
        </div>



        <button id="submit-id" type= "button">Submit</button>
        <button id = "cancel-id">Cancel</button>

        
    </form>
    `

    const submitBtn= document.getElementById("submit-id");
    const cancelBtn= document.getElementById("cancel-id");
    

    const titleBtn= document.getElementById("titleid");
    const authorBtn= document.getElementById("authorid");
    const pageBtn= document.getElementById("pageid");
    const readBtn1= document.getElementById("true");
    const readBtn2= document.getElementById("false");
    let selected= readBtn1.checked?readBtn1:readBtn2;

    console.log("readBtn1.checked:", readBtn1.checked, "readBtn2.checked:", readBtn2.checked);


    submitBtn.addEventListener("click", (event)=>{
        event.preventDefault();
         let selected= readBtn1.checked?readBtn1:readBtn2;

   

        addBookToLibrary(titleBtn.value, authorBtn.value, pageBtn.value, selected.value);
        titleBtn.value="";
        authorBtn.value= "";
        pageBtn.value= 0;
        selected.checked = false;


        // to make the form disappear after submit
       
        sidebar.innerHTML="";
        
    });
    cancelBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        
        let selected= readBtn1.checked?readBtn1:readBtn2;
        
        
        titleBtn.value="";
        authorBtn.value= "";
        pageBtn.value= "";
        selected.checked= false;
        
        // to make the form disappear after cancel
        sidebar.innerHTML="";
    });



}

 const newBookBtn= document.getElementById("newbook-id");
 newBookBtn.addEventListener("click", ()=>{
    renderForm();

 });

 Book.prototype.toggleRead= function(){
    
    this.read= this.read==="True"? "False":"True";
}

