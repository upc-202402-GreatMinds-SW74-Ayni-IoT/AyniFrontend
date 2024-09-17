import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
  signInForm!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private usersService: UsersService,
              private tokenStorage: TokenStorageService) {
    /*this.signInForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.username
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });*/

    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log('User already logged!: ', this.tokenStorage.getUser());

    }
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const credentials = {
        username: this.signInForm.get('username')?.value,
        password: this.signInForm.get('password')?.value,
      };

      this.usersService.signin(credentials).pipe(
      ).subscribe({
        next: (response) => {
          console.log('Signin successful:', response);
          this.tokenStorage.saveToken(response.token);
          this.tokenStorage.saveUser(response);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;

          if(this.tokenStorage.getUser().roles[0].role === 'ROLE_FARMER')
            this.router.navigate(['farmer-home']);
          else
            this.router.navigate(['merchant-home']);
        },
        error: (error) => {
          console.error('Signin failed:', error);
        }
      });
    }
  }

  redirectToSignup() {
    this.router.navigate(['signup']);
  }

  redirectToHome() {

    //if (this.tokenStorage.getUser().roles[0].role === 'ROLE_FARMER') this.router.navigate(['farmer-home']);
    //else this.router.navigate(['merchant-home']);
  }
}
