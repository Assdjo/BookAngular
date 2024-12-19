import { Component } from '@angular/core';
import { Books } from '../../../models/books';
import { ActivatedRoute } from '@angular/router';
import { BooksList } from '../../../data/BookList';

@Component({
  selector: 'app-show',
  standalone: false,
  
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  author!: Books | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const authorId = Number(this.route.snapshot.paramMap.get('id'));
    this.author = BooksList.find((book) => book.id === authorId);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
