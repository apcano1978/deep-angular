import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatTabsModule,
    MatCardModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatTabsModule,
    MatCardModule,
    NotFoundComponent
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
