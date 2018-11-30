
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './main/categorias/categorias.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { AulasComponent } from './main/aulas/aulas.component';
import { FooterComponent } from './main/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    CategoriasComponent,
    AulasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
