import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistryComponent } from './pages/registry/registry.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registry',
    pathMatch: 'full',
  },
  {
    path: 'registry',
    component: RegistryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
