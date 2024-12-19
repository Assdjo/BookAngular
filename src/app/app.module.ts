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
import { FifaComponent } from './component/game/fifa/fifa.component';
import { GameComponent } from './component/game/game.component';
import { NavComponent } from './component/layouts/nav/nav.component';
import { ShowComponent } from './component/books/show/show.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { ShowWorkComponent } from './component/books/show-work/show-work.component';



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
    FifaComponent,
    GameComponent,
    NavComponent,
    ShowComponent,
    HeaderComponent,
    ShowWorkComponent,
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
