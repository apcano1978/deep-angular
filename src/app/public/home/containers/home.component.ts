import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PublicService } from '../../public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters = [];
  continents = [];

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    // this.getCharacters();
    // this.getContinents();
    this.myVeryFirstObservable();
  }

  myVeryFirstObservable() {
    const observable = new Observable(subscriber => {
      let count = 0;

      setInterval(() => {
        subscriber.next(count);
        count += 1;
      }, 1000);
    });

    console.log('Antes de ejecutar el observable...');
    const subscription = observable.subscribe(
      value => console.log('Callback next', value),
      error => console.log('Callback error', error),
      () => console.log('Observable completado')
    );
    console.log('Después de ejecutar el observable...');

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3500)
  }

  // getCharacters() {
  //   this.publicService.getCharacters().subscribe(
  //     response => this.characters = response,
  //     error => console.log(error)
  //   )
  // }

  // getContinents() {
  //   this.publicService.getContinents().subscribe(
  //     response => this.continents = response,
  //     error => console.log(error)
  //   )
  // }
}
