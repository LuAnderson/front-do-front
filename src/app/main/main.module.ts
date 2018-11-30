import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    CategoriasComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
