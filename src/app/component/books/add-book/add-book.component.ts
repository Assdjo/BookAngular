import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { BooksList } from '../../../data/BookList';
import { Books } from '../../../models/books';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: false,
  
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit{
  book:Books = {
    id:0,
    name: '',
    birthYear: 0,
    deathYear: 0,
    nationality: '',
    works: [
      {
        title: '',
        publicationYear: 0,
        genre: '',
        summary: '',
      },
    ],
  };
  @Input() getListBooks! : () => void ;
  @Output() sendToList:EventEmitter<Books> = new EventEmitter<Books>();
  @Input() onSubmit! : (book:Books)=>void;
  
  ngOnInit(): void {
  this.getListBooks()
    
  }

  constructor(private BookService:BookService){}
  addWork() {
    this.book.works.push({
      title: '',
      publicationYear: 0,
      genre: '',
      summary: '',
    });
  }

  removeWork(index: number) {
    this.book.works.splice(index, 1);
  }

  
}
