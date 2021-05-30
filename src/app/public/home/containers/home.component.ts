import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters;
  continents;

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    this.getCharacters();
    this.getContinents();
  }

  getCharacters() {
    this.publicService.getCharacters().subscribe(
      response => this.characters = response,
      error => console.log(error)
    )
  }

  getContinents() {
    this.publicService.getContinents().subscribe(
      response => this.continents = response,
      error => console.log(error)
    )
  }
}
