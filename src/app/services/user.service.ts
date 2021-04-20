import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  //* adding new user data to local storage
  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users') || '{}');
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('users', JSON.stringify(users));
  }
}
