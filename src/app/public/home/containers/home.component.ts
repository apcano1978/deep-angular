import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { PublicService } from '../../public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterText: string = '';
  continents = [];

  currentCharacter: any = null;

  knownContinentsList = { id: 1, name: 'Westeros' };

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    this.getContinents();
  }

  getCharacter(id: number) {
    this.publicService.getCharacter(id).subscribe(
      response => {
        this.currentCharacter = response;
        console.log(response);
      },
      error => console.log(error)
    )
  }

  getContinents() {
    this.publicService.getContinents().subscribe(
      response => {
        this.continents = response;
        // console.log('Continentes obtenidos ---> ', this.continents);
      },
      error => console.log(error)
    )
  }

  applyFilter(filterText: string) {
    console.log('Texto de búsqueda ---> ', filterText);
    this.filterText = filterText;
  }
}
