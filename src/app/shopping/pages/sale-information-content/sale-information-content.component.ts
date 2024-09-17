import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Sale} from "../../model/sale";
import {SalesService} from "../../services/sales.service";
import {OrderdataService} from "../../services/orderdata.service";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-sale-information-content',
  templateUrl: './sale-information-content.component.html',
  styleUrls: ['./sale-information-content.component.css']
})
export class SaleInformationContentComponent {
  sale: Sale = new Sale();
  form: any = {
    id: 0,
    saleId: 0,
    orderedBy: 0,
    acceptedBy: 0,
    description: '',
    quantity: 0,
    status: '',
    orderedDate: '',
    totalPrice: '',
    paymentMethod: ''
  }

  constructor(private route: ActivatedRoute, private router: Router, private salesService: SalesService,
              private dataService: OrderdataService, private tokenStorage: TokenStorageService) {}
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.route.params.subscribe(params => {
      const saleId = +params['id'];
        this.salesService.getById(saleId).subscribe((saleResponse: any) => {
        this.sale=saleResponse;
        this.form.saleId=saleId;
        this.form.orderedBy=this.tokenStorage.getUser().id;
        this.form.acceptedBy=this.sale.userId;
      });
    });
  }

  redirectToNewSale() {
    this.dataService.setFormData(this.form);
    this.router.navigate(['/requests']);
  }
}
