import { Injectable } from '@angular/core';
import { UserConnexion } from '../models/user-connexion';
import { USER } from '../data/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users:UserConnexion[] = USER
  isLoginIn:boolean = false
  settolocalestorage(param:any, key:string) {
    const temp = JSON.stringify(param)
    localStorage.setItem(key, temp)
  }
  GetTolocalestorage(key:string) {
    const temp = JSON.parse(key)
    return temp;
  }

  login(form:{email:string; password:string}) {
      const user = this.Users.filter((u)=>u.email === form.email && u.password === form.password)
      if (user.length>0) {
       console.log("utilisateur connecté avec succès");
       this.isLoginIn = true
       this.settolocalestorage(this.isLoginIn, 'isLogin')
      return true;
      } else {
       console.log("mot de passe ou email incorrect");
       this.isLoginIn = false
       this.settolocalestorage(this.isLoginIn, 'isLogin')
        return false;
      }
  }

  Logout() {
    this.isLoginIn = false
    this.settolocalestorage(this.isLoginIn, 'isLogin')
  }

  
}
