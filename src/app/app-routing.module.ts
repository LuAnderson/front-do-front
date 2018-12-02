import { ModuleWithProviders } from '@angular/compiler/src/core';

import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { SimuladosComponent } from './simulados/simulados.component';

const APP_ROUTES: Routes = [
  {path: '', component: MainComponent},
  {path: 'desenvolvimento', component: SimuladosComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
