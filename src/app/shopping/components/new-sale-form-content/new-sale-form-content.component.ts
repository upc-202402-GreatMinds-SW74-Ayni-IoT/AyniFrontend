import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-new-sale-form-content',
  templateUrl: './new-sale-form-content.component.html',
  styleUrls: ['./new-sale-form-content.component.css']
})
export class NewSaleFormContentComponent {
  saleForm: Sale;
  constructor(private salesService: SalesService, private router: Router, private tokenStorage: TokenStorageService) {
    this.saleForm={
      id: 0,
      name: '',
      description: '',
      unitPrice: 0,
      quantity: 0,
      imageUrl: '',
      userId: 0
    };
  }

  onSubmit() {
    this.saleForm.userId=this.tokenStorage.getUser().id;
    this.salesService.create(this.saleForm).subscribe(() => {
      location.reload();
    });
  }
}
