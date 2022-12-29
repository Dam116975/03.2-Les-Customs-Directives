import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SurvoleDirective } from './survole.directive';
import { ShowDirective } from './show.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    SurvoleDirective,
    ShowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
