import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksList } from '../../../data/BookList';
import { log } from 'console';

@Component({
  selector: 'app-show-work',
  standalone: false,
  
  templateUrl: './show-work.component.html',
  styleUrl: './show-work.component.css'
})
export class ShowWorkComponent {
  work: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const workId = this.route.snapshot.paramMap.get('title'); // Récupérer le title dans mon URL
    if (workId) {
    console.log(workId);
    
      // Rechercher dans la liste BooksList
      for (const book of BooksList) {
        const foundWork = book.works.find((work) => work.title === workId);
        if (foundWork) {
          this.work = foundWork;
          break;
        }
      }
    }
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
