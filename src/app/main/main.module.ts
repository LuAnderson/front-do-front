import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';
import { AulasComponent } from './aulas/aulas.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ChatComponent } from './chat/chat.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    CategoriasComponent,
    FooterComponent,
    AulasComponent,
    QrcodeComponent,
    ChatComponent,
    QuestoesComponent,
    SlideComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
