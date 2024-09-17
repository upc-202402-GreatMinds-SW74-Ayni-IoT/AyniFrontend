import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SaleDialogContentComponent} from "../sale-dialog-content/dialog-content.component";
import {Order} from "../../model/order";
import {OrdersService} from "../../services/orders.service";
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'sales-step3-card-content',
  templateUrl: './step3-card-content.component.html',
  styleUrls: ['./step3-card-content.component.css']
})
export class SalesStep3CardContentComponent {
  @Input() formData: Order = new Order();
  sale: any;
  saleT: any;
  sales: any = "/sales"
  constructor(public dialog:MatDialog, private ordersService: OrdersService, private salesService: SalesService) {

  }

  openDialog() {
    this.dialog.open(SaleDialogContentComponent)
  }

  onSubmit() {
    this.salesService.getById(this.formData.saleId).subscribe((saleResponse: any) => {
      this.sale = saleResponse;
      this.formData.totalPrice = this.formData.quantity * this.sale.unitPrice;
      this.ordersService.create(this.formData).subscribe(() => {
      });
    });
  }
}
