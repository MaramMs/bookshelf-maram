const shilf_1=document.getElementById("shilf1"),
        shilf_2=document.getElementById("shilf2"),
        shilf_3=document.getElementById("shilf3"),
        libaryContiner=document.getElementById("libaryContiner"),
        addForm=document.getElementById("addForm")

let books = [
    {
        title: "book1",
        author: "Frank Hebert",
        image: "./images/javascript.jpg"
    },
    {
        title: "The Lightning Thief",
        author: "Rick Riordan",
        image: "./images/node.jpg"
    },
    {
        title: "Educated",
        author: "Tara Westover",
        image: "./images/js.jpg"
    },
    {
        title: "A new Earth Awakening to",
        author: "Eckhart Toole",
        image: "./images/stars.jpg"
    },
    {
        title: "A Visit from Saint Nicholas, Twas",
        author: "Clement C. Moore",
        image: "./images/school.jpg"
    },
    {
        title: "The Bluest Eye",
        author: "Toni Morrison",
        image: "./images/beginning.jpg"
    },
    {
        title: "Frankenstein: or< The Modern",
        author: "Mary Wollstonecraft",
        image: "./images/book.jpg"
    }
]

document.getElementById('newBook').addEventListener('click',()=>{
    libaryContiner.style.display= "none";
    addForm.style.display= "flex";

})
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newBook ={
        title:document.getElementById("bookTitle").value,
        auther:document.getElementById("bookAuthor").value,
        image:document.getElementById("bookImg").value
    }
    console.log(newBook)
    books.push(newBook)
    createAllBooks(books);
    libaryContiner.style.display= "flex";
    addForm.style.display= "none";
})

const createOneBook = (parent,{title,author,image})=>{
    const imgCont =document.createElement('div');
    imgCont.className ="img-cont"

    const imgElem =document.createElement('img');
    imgElem.setAttribute('src',image)
    imgCont.append(imgElem);

    const detalCont =document.createElement('div');
    detalCont.className ="book-cont"
    const titleCont=document.createElement('h3');
    titleCont.className="title-cont";
    titleCont.innerText= title;
    const authorCont =document.createElement("h4");
    authorCont.className="author-cont";
    authorCont.innerText= author;

    detalCont.append(titleCont,authorCont);
    const bookCont =document.createElement('div');
    bookCont.className ="book-cont"
    
    bookCont.append(imgCont,detalCont);
    parent.append(bookCont);
}
const createAllBooks = (arr) => {
    shilf_1.innerHTML="";
    shilf_2.innerHTML="";
    shilf_3.innerHTML="";
    const sortArrToAlAlphab = arr.sort((a,b)=>{a-b});
    sortArrToAlAlphab.map((book,index,arr)=>{
        console.log(book)
        const onePart = parseInt(arr.length/3);
        if(index < onePart){
            createOneBook(shilf_1,book)
        }else if(index <(2*onePart)){
            createOneBook(shilf_2,book)
        }else {
            createOneBook(shilf_3,book);
        }
        
    })
}
createAllBooks(books);