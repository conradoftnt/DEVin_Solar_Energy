import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user_interface';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'SE-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  email: string = '';
  password: string = '';
  users: User[] = [];

  constructor(private data_base: DataBaseService, private route: Router) {}

  checkUserLogin() {
    this.data_base.checkUser().subscribe((result: User[]) => {
      this.users = result;
    });

    for (let verifyUser of this.users) {
      if (
        verifyUser.email == this.email &&
        verifyUser.password == this.password
      ) {
        this.route.navigateByUrl('/content/dashboard/total');
      }
    }
  }

  ngOnInit(): void {}
}
