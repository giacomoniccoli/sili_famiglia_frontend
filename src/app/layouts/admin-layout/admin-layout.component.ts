import { Component, OnInit } from '@angular/core';
import { ConfigService, Response } from 'src/app/config/config.service';
import { Test } from 'src/app/models/models';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  providers: [ConfigService],
})
export class AdminLayoutComponent implements OnInit {
  config: Response<Test> | undefined;

  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.getTest();
  }

  getTest() {
    this.configService.getTest().subscribe((data: Response<Test>) => this.config = data);
  }
}
