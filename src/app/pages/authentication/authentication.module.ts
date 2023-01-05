import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AuthenticationModule { }
