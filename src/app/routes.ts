import { Routes } from "@angular/router";
import { BookListComponent } from "./component/books/book-list/book-list.component";
import { AddBookComponent } from "./component/books/add-book/add-book.component";
import { LoginComponent } from "./component/auth/login/login.component";
import { RegisterComponent } from "./component/auth/register/register.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { GameComponent } from "./component/game/game.component";
import { FifaComponent } from "./component/game/fifa/fifa.component";
import { ShowComponent } from "./component/books/show/show.component";
import { ShowWorkComponent } from "./component/books/show-work/show-work.component";

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
        path:"author/:id",
        component: ShowComponent
    },
    {
        path:"work/:title",
        component: ShowWorkComponent
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
        path:"game",
        component: GameComponent,
        children:[
            {
                path: "fifa",
                component:FifaComponent
            }
        ]
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