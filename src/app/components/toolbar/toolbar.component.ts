import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() toggleEmitter: EventEmitter<any> = new EventEmitter();
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();
  name: string = '';

  onSearchChange(value: string){
   this.searchEmitter.emit(value);
  }
}
