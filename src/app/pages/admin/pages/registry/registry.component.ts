import { DataSource } from '@angular/cdk/table';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})

export class RegistryComponent implements AfterViewInit {
   users: UserData[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'active'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public dialog: MatDialog) {
    this.users = Array.from({length: 2}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((result?: UserData) => {
     if(result){
      this.users = [...this.users, result];
      this.dataSource = new MatTableDataSource(this.users)
      this.dataSource.paginator = this.paginator;
     }
    });
    
  }
}

export interface UserData {
  id: string;
  name: string;
  active: boolean;
  email: string;
}

/** Constants used to fill up our data base. */
const EMAILS: string[] = [
  'blueberry@123.com',
  'lychee@123.com',
  'kiwi@123.com',
  'mango@1423.com',
  'peach@123.com',
  'lime@123.com',
  'pomegranate@123.com',
  'pineapple@123.com',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    active: Math.round(Math.random() * 100) % 2 ==0,
    email: EMAILS[Math.round(Math.random() * (EMAILS.length - 1))],
  };
}

class ExampleDataSource extends DataSource<UserData> {
  private _dataStream = new ReplaySubject<UserData[]>();

  constructor(initialData: UserData[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<UserData[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: UserData[]) {
    this._dataStream.next(data);
  }
}