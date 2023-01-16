import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NavItem } from 'src/app/models/nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
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
