import { Component } from '@angular/core';
import { Books } from '../../../models/books';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-show',
  standalone: false,
  
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  author!: Books | undefined;

  constructor(private route: ActivatedRoute, private BookService:BookService) {}

  ngOnInit(): void {
    const authorId = Number(this.route.snapshot.paramMap.get('id'));
    this.author =this.BookService.getBookById(authorId)
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
