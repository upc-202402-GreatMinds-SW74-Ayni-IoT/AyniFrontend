import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  @Output() form = new EventEmitter<any>();

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private dataService: DataService) {

    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ''
    });
  }

  saveData() {
    this.dataService.setFormData(this.signUpForm.value);
    this.router.navigate(['select-rol']);
  }

  redirectToSignin() {
    this.router.navigate(['signin'])
  }

  ngOnInit(): void {

  }
}
