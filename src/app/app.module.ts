import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { CursosModule } from './components/cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
