import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { BooksList } from '../data/BookList';
import { stringify } from 'node:querystring';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:Books[]=[]

settostorage(param: Books[]) {
  const book = JSON.stringify(param)
      localStorage.setItem('books', book)
}
  init() {
   
   const Books = localStorage.getItem('books')
    if (Books === null) {
      this.books = BooksList
      this.settostorage(this.books) 
      console.log("je suis dans le if")
    } else {
      const book = localStorage.getItem('books')
          if (book) {
            this.books = JSON.parse(book)
          } 
          console.log("je suis dans else");
          
     }
  }
  
  // Récupérer la liste complète des livres
  getBooks(): Books[] {
    this.init()
    return this.books;
  }

  // Récupérer un livre par son ID
  getBookById(id: number): Books | undefined {
    return this.books.find(book => book.id === id);
  }

  // Ajouter un nouveau livre
  addBook(newBook: Books): void {
    const newBookCopy = {
      ...newBook,
      works: newBook.works.map(work => ({
        ...work
      }))
    };
    const newId = this.books.length > 0 ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
    newBook.id = newId;
    this.books.push(newBookCopy);
    this.settostorage(this.books)
    this.getBooks()
    console.log(`Livre ajouté :`, newBookCopy);
    console.log(`Livre ajouté :`, this.books);
  }

  // Mettre à jour un livre existant
  updateBook(id: number, updatedBook: Partial<Books>): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books[index] = { ...this.books[index], ...updatedBook };
      this.settostorage(this.books)
      console.log(`Livre avec ID ${id} mis à jour :`, this.books[index]);
    } else {
      console.error(`Livre avec ID ${id} introuvable.`);
    }
  }

  // Supprimer un livre par son ID
  deleteBook(id: number): void {
    const initialLength = this.books.length;
    this.books = this.books.filter(book => book.id !== id);
    this.settostorage(this.books)
    if (this.books.length < initialLength) {
      console.log(`Livre avec ID ${id} supprimé.`);
    } else {
      console.error(`Livre avec ID ${id} introuvable.`);
    }
  }

  deleteWork(title: string): void {
    const initialLength = this.books.length;
    this.books = this.books.filter(book => book.works.filter((work)=>work.title !== title));
    this.settostorage(this.books)
  }
}