import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';
import { PublicService } from '../../public.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  currentUser: User;
  password: string;

  constructor(
    private publicService: PublicService
  ) {}

  login(username: string, password: string) {
    const currentUser = '';
    this.publicService.login(
      { user: this.currentUser, password: this.password }
    ).subscribe({
      next: (user: User) => {
        console.log(user)
      }
    })
  }
}


