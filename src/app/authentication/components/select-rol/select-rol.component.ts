import {Component, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css']
})
export class SelectRolComponent {
  rol !: string;
  formData: any = {};

  constructor(private router: Router,
              private dataService: DataService,
              private usersService: UsersService) {
    this.formData = this.dataService.getFormData();
  }
  onFarmerSelected() {
    this.formData.role = 'farmer';
    this.usersService.signup(this.formData).subscribe(() => {
      this.router.navigate(["signin"]);
    });
  }

  onMerchantSelected() {
    this.formData.role = 'merchant';
    console.log(this.formData);
    this.usersService.signup(this.formData).subscribe(() => {
      this.router.navigate(["signin"]);
    });
  }
}
