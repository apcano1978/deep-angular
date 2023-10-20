import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderFilterBoxComponent } from './components/header-filter-box/header-filter-box.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
  ],
  declarations: [
    NotFoundComponent,
    HeaderFilterBoxComponent,
    NameFilterPipe
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    NotFoundComponent,
    HeaderFilterBoxComponent,
    NameFilterPipe
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
