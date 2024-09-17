import {Component, EventEmitter, Output} from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../model/order";
import {Router} from "@angular/router";
import {OrderdataService} from "../../services/orderdata.service";
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'sales-step1-card-content',
  templateUrl: './step1-card-content.component.html',
  styleUrls: ['./step1-card-content.component.css']
})
export class SalesStep1CardContentComponent {
  @Output() formCompleted1 = new EventEmitter<any>();

  sale: Sale = new Sale();
  form: any = {};
  saleform1: Order;
  constructor(private ordersService: OrdersService, private salesService: SalesService, private dataService: OrderdataService) {
    this.saleform1={
      id: 0, saleId:0, orderedBy:0, acceptedBy:0, description:'',quantity:0, status:'', orderedDate:'',
      totalPrice:0, paymentMethod:''};
    this.form = this.dataService.getFormData();
  }

  onSubmit() {
    this.salesService.getById(this.form.saleId).subscribe((saleResponse) => {
      this.sale = saleResponse;
      this.saleform1.saleId = this.form.saleId;
      this.saleform1.orderedBy = this.form.orderedBy;
      this.saleform1.acceptedBy = this.form.acceptedBy;
      this.formCompleted1.emit(this.saleform1);
    });
  }
}
