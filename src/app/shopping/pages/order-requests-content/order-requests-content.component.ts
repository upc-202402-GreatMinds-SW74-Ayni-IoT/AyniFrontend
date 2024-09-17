import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrderDialogContentComponent} from "../../components/order-dialog-content/order-dialog-content.component";
import {Router} from "@angular/router";
import {Order} from "../../model/order";
import {User} from "../../../authentication/model/user";
import {Sale} from "../../model/sale";
import {OrdersService} from "../../services/orders.service";
import {SalesService} from "../../services/sales.service";
import {UsersService} from "../../../authentication/services/users.service";
import {NewSaleFormContentComponent} from "../../components/new-sale-form-content/new-sale-form-content.component";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-order-requests-content',
  templateUrl: './order-requests-content.component.html',
  styleUrls: ['./order-requests-content.component.css']
})
export class OrderRequestsContentComponent implements OnInit {

  orders: Order[] = [];
  order: Order = new Order();
  users: User[] = [];
  sales: Sale[] = [];
  pageSize = 4;
  pageIndex = 0;
  pageNumbers: number[] = [];

  constructor(private ordersService: OrdersService, private salesService: SalesService, private usersService: UsersService, public dialog: MatDialog, private router: Router, private tokenStorage: TokenStorageService) {
  }

  acceptOrder(id: number){
    this.ordersService.finalizeOrder(id).subscribe(() => {
      const dialogRef = this.dialog.open(OrderDialogContentComponent, {
        width: '600px',
      });
      location.reload();
    });
  }
  ngOnInit(): void {
   this.loadData(this.tokenStorage.getUser().id);
  }

  loadData(userId: number){
    this.ordersService.getAll().subscribe((response: any) => {
      this.orders = response.filter((order: any) => order.acceptedBy === userId && order.status === 'pending');
      this.pageNumbers = Array.from({ length: Math.ceil(this.orders.length / this.pageSize) }, (_, index) => index );

      this.orders.forEach(order => {
        this.salesService.getById(order.saleId).subscribe((productResponse: any) => {
          this.sales.push(productResponse);
        });
      });
    });
  }

  getUser(userId: number): any{
    return this.users.find(user => user.id === userId);
  }

  getProduct(saleId: number): any {
    return this.sales.find(sale => sale.id === saleId);

  }

  get pagedOrders(): Order[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.orders.slice(startIndex, endIndex);
  }

  deleteOrder(id: number) {
    this.ordersService.delete(id).subscribe(() => {
      this.loadData(this.tokenStorage.getUser().id);
    });
  }

  goToPage(pageNumber: number) {
    if (pageNumber >= 0 && pageNumber < this.pageNumbers.length) {
      this.pageIndex = pageNumber;
    }
  }

  navigateToPreviousView() {
    this.router.navigate(['farmer-home']).then(r =>  console.log('Navegación exitosa'));
  }

  addNewSale() {
    this.dialog.open(NewSaleFormContentComponent);
  }
}

