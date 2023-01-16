import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from '../../registry.component';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
  ) {}

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required]),
  });

  onSubmit() {
    var user: UserData = {
      name: this.userForm.get('name')?.value ?? '',
      active: this.userForm.get('status')?.value ?? false, 
      email:this.userForm.get('email')?.value ?? '', 
      id:'1000', 
    }
    this.dialogRef.close(user);
  }


}
