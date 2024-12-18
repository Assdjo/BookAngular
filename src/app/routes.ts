import { Routes } from "@angular/router";
import { BookListComponent } from "./component/books/book-list/book-list.component";
import { AddBookComponent } from "./component/books/add-book/add-book.component";
import { LoginComponent } from "./component/auth/login/login.component";
import { RegisterComponent } from "./component/auth/register/register.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";

const routes :Routes = [
    {
        path:"",
        component: BookListComponent
    },
    {
        path:"add-book",
        component: AddBookComponent
    },

    {
        path:"login",
        component: LoginComponent
    },

    {
        path:"register",
        component: RegisterComponent
    },
    {
        path:"**",
        component: NotFoundComponent
    },
]

export default routes;