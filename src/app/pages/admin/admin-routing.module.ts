import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from 'src/app/constants/route-names';
import { LegalComponent } from './pages/legal/legal.component';
import { ProjectComponent } from './pages/project/project.component';
import { RegistryComponent } from './pages/registry/registry.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${RouteNames.registry}`,
    pathMatch: 'full',
  },
  {
    path: RouteNames.registry,
    component: RegistryComponent,
  },
  {
    path: RouteNames.project,
    component: ProjectComponent,
  },
  {
    path: RouteNames.legal,
    component: LegalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
