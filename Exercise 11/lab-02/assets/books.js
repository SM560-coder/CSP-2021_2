console.log("this works")

const GOOGLE_BOOKS_URL =
  "https://www.googleapis.com/books/v1/volumes?q=painting";

const container = document.querySelector('.container')

  
function getBooks(){

    fetch(GOOGLE_BOOKS_URL)
    .then(response => response.json())
    .then(data => {

        renderBook(data);


        //let books = data.items
        //for( idx in books ) {
           // console.log(books[idx]['volumeInfo']['title'])
            //console.log(items[item]['volumeInfo']) 
           // console.log(items[item]['volumeInfo']['title']) 
    }
);  

}
  

function renderBook(book){
    let bookItem = book.items;

    for(idx in bookItem) {
        console.log(bookItem[idx]['volumeInfo']['title'])
        //console.log(items[item]['volumeInfo']) 
        //console.log(items[item]['volumeInfo']['title']) 
    }
}

getBooks()
