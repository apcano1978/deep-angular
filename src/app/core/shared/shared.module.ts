import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    MatTabsModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    NotFoundComponent
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
