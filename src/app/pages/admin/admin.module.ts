import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegistryComponent } from './pages/registry/registry.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    RegistryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatListModule
  ],
})
export class AdminModule { }
