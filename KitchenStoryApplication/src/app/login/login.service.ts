import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public users: Login[] = [
    {
      email: 'jvishal@gmail.com',
      password: '123',
    },
    {
      email: 'mounika@gmail.com',
      password: 'mouni1234',
    },
    {
      email: 'sandeep@gmail.com',
      password: 'sandy1234',
    },
  ];

  getUsers(): Login[] {
    return this.users;
  }
}
