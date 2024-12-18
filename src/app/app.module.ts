import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './component/books/book-list/book-list.component';
import { AddBookComponent } from './component/books/add-book/add-book.component';
import { EditBookComponent } from './component/books/edit-book/edit-book.component';
import { BookDetailComponent } from './component/books/book-detail/book-detail.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { NotFoundComponent } from './component/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    EditBookComponent,
    BookDetailComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
