

// // 1. // Types, Values, and Variables/ Functions
// // Instruction:
// // - Write function findMin(arr) : Find min number in an array : Return min number
// // Initiate code: 
// // let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
// // console.log(findMin(arr));// 1
// // Insert your code here
// let numbers = [34 ,1, 58 ,8 ,21 , 5 ,13 ,3 , 89 ,7]
// let min = numbers[0]

// function findMin(arr) {
//     arr.forEach((num) => {
//         if(min > num )  min = num
//     });
//     return min
// }
// console.log(findMin(numbers))

// // 2. // Types, Values, and Variables
// // Instruction:
// // - Convert numString to an integer and store it in a new variable num.
// // Initiate code: 
// // // XXXXX is your code 
// // let numString = "1234";
// // let num = XXXXX;
// // console.log(typeof num); // Number

// let numString = "1234";
// let num = parseInt(numString);

// console.log(typeof num); // Number


// // 3. // Types, Values, and Variables/ Arrays
// // Instruction:
// // - Write code to swap their values using array destructuring.
// // Initiate code: 
// // // XXXXX is your code
// // let a = 5, b = 10;
// // XXXXX = [a, b];
// // console.log(a); // 10
// // console.log(b); // 5

// let a = 5, b = 10;
//  [b ,a ]= [a, b];  // Using Destructuring
// console.log(a); // 10
// console.log(b); // 5



// // Module 1.2

// // 1.
// // Instruction:
// // - Write class Book. Then, add a method to the object that outputs information about the 
// // book.
// // Class Book
// // Constructor
// // • Constructor(title, author, yearPublished): This initializes the properties 
// // 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no 
// // author', and 0 respectively.
// // Properties
// // • title: type String
// // • author: type String
// // • yearPublished: type number
// // Methods
// // • getInfo(): This method return a string that combines the book's title, author, 
// // and year of publication.
// // Initiate code:
// // // Creating class Book 
// // // Insert your code here



// class Book {
//     constructor(title, author, yearPublished) {
//         this.title = title || 'no title'
//         this.author = author  || 'no author'
//         this.yearPublished = yearPublished || 0
//     }
//     getInfo() {
//         return `${this.title}  ${this.author} ${this.yearPublished}`;  
       
//     }
// }

// const book = new Book( '', '' , )
// console.log(book.getInfo())


// // // 2.
// // Instruction:
// // - Create an object Book reference ‘practice 1’. Use a constructor Constructor(title, 
// // author, yearPublished. Additionally, use a 'getInfo()' method.
// // Initiate code:
// // // Insert your code here


//  let  book2  =  new Book('asda' , 'dads' , 1233)

// console.log(book2.getInfo())



// 3.
// Instruction:
// - Creating a library system using class Book and Library.
// Class Book:
// Constructor
// • Constructor(title, author, pages, genre): This initializes the properties 'title', 
// 'author' , ' pages' and 'genre'.
// Properties
// • title: type string
// • author: type string
// • pages: type number
// • genre: type string
// Methods
// • getSummary() - Returns a string summary of the book ex: .
// "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"
// Class Library:
// Constructor
// • Constructor(name): This initializes the properties 'name' and creates an 
// empty array in the property books
// Properties
// • name: type string
// • books: type array of Book objects, initially empty.
// Methods
// • addBook(newBook) - Accepts a Book object and adds it to the books array.
// • getBooksByGenre(genre) - Returns an array of books that match the 
// specified genre.
// • getTotalPagesByGenre(genre) - Returns the total number of pages for all 
// books of a specified genre

// class Book {
//     constructor(title, author, pages , genre) {
//         this.title = title 
//         this.author = author  
//         this.pages = pages
//         this.genre = genre
//     }
//     getSummary() {
//     return [ this.title , this.author  , this.pages , this.genre ]
//     }
   
// }
// class Library {
//     constructor(name) {
//         this.name = name
//         this.books = []
//     }

//     addBook(newBook) {
        
//         if (newBook instanceof Book) {
//             this.books.push(newBook);
//             console.log(`${newBook.title} added to ${this.name} library.`);
//           } else {
//             console.log('Invalid book object provided.');
//           }

//     }

//     getBookByGenre(genre) {
//         return this.books.filter(book => book.genre === genre);
//     }

//     getTotalPagesByGenre(genre) {
//         const genreBooks = this.getBooksByGenre(genre);
//     return genreBooks.reduce((totalPages, book) => totalPages + book.pages, 0);
  
//     }

// }
// let book1 =  new  Book ('adsf' , 'fafaf' , 123124 , 'ffadf')
// let book2 =  new  Book ('asdasd' , 'faffdfdfaf' , 12345124 , 'fggfadf')

// const library = new Library("Aukky Library");

// library.addBook(book1)
// library.addBook(book2)

// console.log(library.getBookByGenre("ffadf"));


// 4
// Instruction:
// - Create a 'Book' object and a 'Library' object for 'Practice 3'. Use a constructor and 
// methods in both classes.
// Initiate code:
// Insert your code here


// 5.
// Instruction:
// - Create class Elevator with the following specifications:
// Class Elevator:
// Constructor
// • Constructor(maxFloor, minFloor): This initializes the properties 
// 'maxFloor', 'minFloor' and set 'currentFloor' to 0
// Properties
// • currentFloor: The floor where the elevator currently is. , type number
// • maxFloor: The highest floor the elevator can go to. , type number
// • minFloor: The lowest floor the elevator can go to , type number
// Methods
// • goUp(): Increases currentFloor by 1, but not above maxFloor.
// • goDown(): Decreases currentFloor by 1, but not below minFloor.
// • goToFloor(floor): Takes a floor number and sets currentFloor to that 
// floor if it's within range.
// • displayFloor(): Prints the current floor to the console.

class Elevator {
    constructor(maxFloor, minFloor) {
        this.maxFloor = maxFloor
        this.minFloor = minFloor
        this.currentFloor = 0
    }

    goUp(){
        if(this.currentFloor < this.maxFloor) {
          this.currentFloor++
        }
    }

    goDown(){
        if(this.currentFloor > this.minFloor) {
            this.currentFloor--
          }

    }

    goToFloor(floor){
        if(this.currentFloor >= this.minFloor && this.currentFloor <= this.maxFloor) {
            this.currentFloor = floor
        }

    }

    displayFloor(){
        console.log(this.currentFloor)
    }

}


let elevator = new Elevator(10, 1);

elevator.goUp();
elevator.goUp();
elevator.displayFloor();

elevator.goDown();
elevator.displayFloor();

elevator.goToFloor(5);
elevator.displayFloor();

elevator.goToFloor(15); 
 