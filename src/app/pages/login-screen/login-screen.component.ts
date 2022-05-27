import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'SE-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  email: string = '';
  password: string = '';
  users: User[] = [];

  constructor(private http: HttpClient, private route: Router) {}

  checkUserLogin(): void {
    for (let verifyUser of this.users) {
      if (
        verifyUser.email == this.email &&
        verifyUser.password == this.password
      ) {
        this.route.navigateByUrl('');
      }
    }
  }

  ngOnInit(): void {
    this.http
      .get<User[]>('http://localhost:3000/users')
      .subscribe((value: User[]) => {
        this.users = value;
      });
  }
}
