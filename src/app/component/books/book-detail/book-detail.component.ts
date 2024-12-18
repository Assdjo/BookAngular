import { Component, Input } from '@angular/core';
import { Works } from '../../../models/works';
import { Books } from '../../../models/books';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {

  @Input() getListBooks! : () => void ;
@Input() selectedBook:Books|null = {
  "id": 1,
      "name": "Victor Hugo",
      "birthYear": 1802,
      "deathYear": 1885,
      "nationality": "French",
      "works": [
        {
          "title": "Les Misérables",
          "publicationYear": 1862,
          "genre": "Novel",
          "summary": "A story about the struggles of ex-convict Jean Valjean and his quest for redemption."
        },
        {
          "title": "Notre-Dame de Paris",
          "publicationYear": 1831,
          "genre": "Novel",
          "summary": "A tale of love and obsession set in medieval Paris, centered around the beautiful gypsy Esmeralda."
        }
      ]
    }
    constructor(private bookService: BookService) {}

    deleteWork(title: string): void {
      this.bookService.deleteWork(title);
      this.getListBooks(); 
      this.selectedBook; 
    }
}
