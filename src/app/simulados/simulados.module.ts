import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimuladosComponent } from './simulados.component';
import { CardsComponent } from './cards/cards.component';
import { MenuSimuladoComponent } from './menu-simulado/menu-simulado.component';
import { FooterSimuladoComponent } from './footer-simulado/footer-simulado.component';

@NgModule({
  declarations: [SimuladosComponent, CardsComponent, MenuSimuladoComponent, FooterSimuladoComponent],
  imports: [
    CommonModule
  ]
})
export class SimuladosModule { }
