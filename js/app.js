"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const util = require("./lib/utilityFunctions");
function PrintBookInfo({ title: booktitle, author: bookauthor }) {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}
let [book1, book2] = util.GetAllBooks();
function LogFavoriteBooks([book1, book2, ...others]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
LogFavoriteBooks(util.GetAllBooks());
let { title: booktitle, author: bookauthor, category: bookcategory } = book1;
console.log(booktitle);
console.log(bookauthor);
console.log(enums_1.Category[bookcategory].toString());
PrintBookInfo(book1);
let schoolBooks = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: enums_1.Category.Fiction },
    { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true, category: enums_1.Category.Fiction },
    { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: enums_1.Category.Fiction }
];
let poets = ['Shelly', 'Collins', 'Hughes'];
let authors = ['Tolstoy', 'Fitzgerald', ...poets];
let temp = schoolBooks[1].author;
console.log(authors);
//# sourceMappingURL=app.js.map