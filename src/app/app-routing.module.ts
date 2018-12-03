import { ModuleWithProviders } from '@angular/compiler/src/core';

import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { SimuladosComponent } from './simulados/simulados.component';
import { QrcodeComponent } from './main/qrcode/qrcode.component';
import { QuestoesComponent } from './main/questoes/questoes.component';
import { ChatComponent } from './main/chat/chat.component';
import { SlideComponent } from './main/slide/slide.component';


const APP_ROUTES: Routes = [
  {path: '', component: MainComponent},
  {path: 'inicio', component: MainComponent},
  {path: 'simulado', component: SimuladosComponent},
  {path: 'qr-code', component: QrcodeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'questoes', component: QuestoesComponent},
  {path: 'slide', component: SlideComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
