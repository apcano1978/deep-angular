import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user';
import { PublicService } from './public.service';
import { UserDto } from '../core/models/user-dto';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit {
  users: User[] = [];
  constructor(
    private publicService: PublicService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.publicService.getUsers().subscribe({
      next: (response: UserDto) => {
        this.users = response.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
