import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule),
    component: AuthLayoutComponent
  },
  {
    path: '',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    component: AdminLayoutComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
