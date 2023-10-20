import { Component, OnInit, Input } from '@angular/core';
import { PublicService } from 'src/app/public/public.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input() searchFilter: string = '';
  characters = [];

  constructor(
    private publicService: PublicService
  ) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    console.log('Filtro de búsqueda ---> ', this.searchFilter);
    this.publicService.getCharacters().subscribe(
      response => {
        this.characters = response;
        console.log('Personajes obtenidos ---> ', this.characters);
      },
      error => console.log(error)
    )
  }
}
