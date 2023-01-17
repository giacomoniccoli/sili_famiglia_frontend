import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './providers/http-interceptor-providers';
import { AuthService } from './services/auth-service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    PageNotFoundComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    AuthService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
