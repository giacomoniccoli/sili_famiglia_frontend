import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ConfigService, Response } from 'src/app/config/config.service';
import { NavItem } from 'src/app/models/nav-item';
import { Test } from 'src/app/models/test';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  navItems: Observable<NavItem[]> = new Observable();
  sidenavUrl = 'assets/sidenav.json';

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.navItems = this.loadSidenav(this.sidenavUrl);
  }

   loadSidenav(url: string) : Observable<NavItem[]>{
    return this.http.get<NavItem[]>(url).pipe();
  }

  
}
