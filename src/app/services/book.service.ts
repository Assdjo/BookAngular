import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { BooksList } from '../data/BookList';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Books[]= BooksList
  // Récupérer la liste complète des livres
  getBooks(): Books[] {
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
    this.getBooks()
    console.log(`Livre ajouté :`, newBookCopy);
    console.log(`Livre ajouté :`, this.books);
  }

  // Mettre à jour un livre existant
  updateBook(id: number, updatedBook: Partial<Books>): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books[index] = { ...this.books[index], ...updatedBook };
      console.log(`Livre avec ID ${id} mis à jour :`, this.books[index]);
    } else {
      console.error(`Livre avec ID ${id} introuvable.`);
    }
  }

  // Supprimer un livre par son ID
  deleteBook(id: number): void {
    const initialLength = this.books.length;
    this.books = this.books.filter(book => book.id !== id);
    if (this.books.length < initialLength) {
      console.log(`Livre avec ID ${id} supprimé.`);
    } else {
      console.error(`Livre avec ID ${id} introuvable.`);
    }
  }

  deleteWork(title: string): void {
    const initialLength = this.books.length;
    this.books = this.books.filter(book => book.works.filter((work)=>work.title !== title));
  }
}