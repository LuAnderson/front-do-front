import { MainModule } from './main/main.module';
import { MenuComponent } from './main/menu/menu.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './main/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
