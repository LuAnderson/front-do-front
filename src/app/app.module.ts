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
import { FooterSimuladoComponent } from './simulados/footer-simulado/footer-simulado.component';
import { MenuSimuladoComponent } from './simulados/menu-simulado/menu-simulado.component';
import { QrcodeComponent } from './main/qrcode/qrcode.component';
import { ChatComponent } from './main/chat/chat.component';
import { QuestoesComponent } from './main/questoes/questoes.component';
import { SlideComponent } from './main/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    CategoriasComponent,
    AulasComponent,
    FooterComponent,
    SimuladosComponent,
    CardsComponent,
    MenuSimuladoComponent,
    FooterSimuladoComponent,
    QrcodeComponent,
    ChatComponent,
    QuestoesComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
