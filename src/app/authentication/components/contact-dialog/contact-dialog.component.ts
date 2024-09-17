import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {EmailJsService} from "../../services/emailjs.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css'],
  providers: [EmailJsService]
})
export class ContactDialogComponent {
  form: FormGroup;
  isInviteButtonDisabled = true;

  constructor(private dialogRef: MatDialogRef<ContactDialogComponent>,
              private fb: FormBuilder,
              private emailJsService: EmailJsService) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      message: ['', Validators.required],
      to_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],

    });

    this.form.valueChanges.subscribe(() => {
      this.isInviteButtonDisabled = !this.form.valid;
    });
  }

  async sendMessage() {
    this.dialogRef.close();
    try {
      await this.emailJsService.sendInvitation({
        to_name: this.form.value.to_name,
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        message: this.form.value.message,


      });
      alert('Email sent successfully!');

    } catch (e) {
      alert('Error, could not send email.');
      console.log(e);
    }
    this.form.reset();
  }

}
