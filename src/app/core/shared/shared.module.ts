import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    NotFoundComponent
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
