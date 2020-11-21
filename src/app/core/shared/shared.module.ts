import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  imports: [
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
