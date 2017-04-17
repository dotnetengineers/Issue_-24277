import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo({ title: booktitle, author: bookauthor }: Book): void {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}

let [book1, book2] = util.GetAllBooks();

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others)
}

LogFavoriteBooks(util.GetAllBooks());

let {title: booktitle, author: bookauthor, category: bookcategory} = book1;
console.log(booktitle);
console.log(bookauthor);
console.log(Category[bookcategory].toString());

PrintBookInfo(book1); 

let schoolBooks: Book[] = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: Category.Fiction },
    { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true, category: Category.Fiction },
    { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: Category.Fiction }
];

let poets: string[] = ['Shelly', 'Collins', 'Hughes'];

let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];

let temp = schoolBooks[1].author;

console.log(authors);

