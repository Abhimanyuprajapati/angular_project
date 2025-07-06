import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [

 {
    path: 'lifecycle',
    component: LifecycleComponent,
  },

   {
    path: '',
    component: PipesComponent,
  },

];
