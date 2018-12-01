import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimuladosComponent } from './simulados.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [SimuladosComponent, CardsComponent],
  imports: [
    CommonModule
  ]
})
export class SimuladosModule { }
