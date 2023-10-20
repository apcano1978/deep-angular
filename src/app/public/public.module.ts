import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';

import { PublicService } from './public.service';
import { CharacterListComponent } from './home/components/characters-list/characters-list.component';

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    CharacterListComponent
  ],
  exports: [],
  providers: [
    PublicService
  ]
})

export class PublicModule {
  constructor() {}
}
