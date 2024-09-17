import { Component, Input } from '@angular/core';
import { Order } from "../../model/order";
import { User } from "../../../authentication/model/user";
import { Product } from "../../../management/model/product";
import { OrdersService } from "../../services/orders.service";
import { ProductsService } from "../../../management/services/products.service";
import { UsersService } from "../../../authentication/services/users.service";
import { MatDialog } from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {
  CancelPurchaseDialogContentComponent
} from "../../components/cancel-purchase-dialog-content/cancel-purchase-dialog-content.component";
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";

@Component({
  selector: 'app-order-Information-content',
  templateUrl: './order-information-content.component.html',
  styleUrls: ['./order-information-content.component.css']
})
export class OrderInformationContentComponent {
  order: Order = new Order();
  user: User = new User();
  sale: Sale = new Sale();
  product: Product = new Product();

  constructor(
    private orderService: OrdersService,
    private salesService: SalesService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe(params => {
      const purchaseId = +params['id'];
      this.orderService.getById(purchaseId).subscribe((orderResponse: any) => {
        this.order=orderResponse;
        this.salesService.getById(this.order.saleId).subscribe((saleResponse: any) => {
          this.sale=saleResponse;
        });
      });
    });
  }

  openDialog() {
    this.dialog.open(CancelPurchaseDialogContentComponent);
  }

  deleteOrder(id: number) {
    this.orderService.delete(id).subscribe(() => { });
  }

  calculateProgress(status: string){
    if (status === 'pending') {
      return 10;
    } else if (status === 'finalized') {
      return 80;
    }
    else if (status === 'qualified') {
      return 100;
    } else {
      return 0;
    }
  }

  navigateBack() {
    this.router.navigate(['/purchases']);
  }

}
