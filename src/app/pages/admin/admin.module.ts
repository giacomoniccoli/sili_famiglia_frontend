import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegistryComponent } from './pages/registry/registry.component';
import { MatListModule } from '@angular/material/list';
import { ProjectComponent } from './pages/project/project.component';
import { LegalComponent } from './pages/legal/legal.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AddDialogComponent } from './pages/registry/components/add-dialog/add-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    RegistryComponent,
    ProjectComponent,
    LegalComponent,
    AddDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
