import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './main/categorias/categorias.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { AulasComponent } from './main/aulas/aulas.component';
import { FooterComponent } from './main/footer/footer.component';
import { CardsComponent } from './simulados/cards/cards.component';
import { SimuladosComponent } from './simulados/simulados.component';
import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    CategoriasComponent,
    AulasComponent,
    FooterComponent,
    SimuladosComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
