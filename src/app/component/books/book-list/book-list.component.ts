import { booleanAttribute, Component, Input, OnInit } from '@angular/core';
import { Books } from '../../../models/books';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: false,
  
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
Bookslists: Books[]=[]
filteredBooks: Books[] = [];
selectedBook: Books | null = null;


constructor(private BookService: BookService) {}



 ngOnInit(): void {
  this.getlistBooks()
}

getlistBooks() {
  this.Bookslists = this.BookService.getBooks()
  this.filteredBooks = this.Bookslists;
}

filterBooks(event: Event): void {
  const query = (event.target as HTMLInputElement).value.toLowerCase();
  this.filteredBooks = this.Bookslists.filter(
    (book) =>
      book.name.toLowerCase().includes(query) ||
      book.works.some((work) =>
        work.title.toLowerCase().includes(query)
      )
  );
}
viewDetails(book: Books): void {
  this.selectedBook = book;
}

closeDetails(): void {
  this.selectedBook = null;
}

editBook(book: Books, id:number): void {
  this.BookService.updateBook(id, book)
  console.log('Modifier le livre :', book);
}

onSubmit(book:Books) {
  console.log('Auteur et Œuvres enregistrés :', book);
 this.BookService.addBook(book)
}
}
