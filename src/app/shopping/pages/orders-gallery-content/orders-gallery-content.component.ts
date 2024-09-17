import { Component } from '@angular/core';
import {Order} from "../../model/order";
import {OrdersService} from "../../services/orders.service";
import {UsersService} from "../../../authentication/services/users.service";
import {Product} from "../../../management/model/product";
import {User} from "../../../authentication/model/user";
import {PageEvent} from "@angular/material/paginator";
import {SalesService} from "../../services/sales.service";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-orders-gallery-content',
  templateUrl: './orders-gallery-content.component.html',
  styleUrls: ['./orders-gallery-content.component.css']
})
export class OrdersGalleryContentComponent {
  purchases: Order[] = [];
  users: User[] = [];
  products: Product[] = [];
  pagedList: Order[] = [];
  breakpoint: number = 1;
  length: number = 0;
  pageSize: number = 1;
  pageSizeOptions: number[] = [1, 2, 4, 6];

  constructor(private ordersService: OrdersService, private salesService: SalesService, private userService: UsersService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.loadData(this.tokenStorage.getUser().id);
  }

  loadData(userId: number) {
    this.ordersService.getAll().subscribe((response: any) => {
      this.purchases = response.filter((purchase: any) => purchase.orderedBy === userId);
      this.pagedList = this.purchases.slice(0,1)
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.purchases.length;

      this.purchases.forEach(purchase => {
        this.salesService.getById(purchase.saleId).subscribe((productResponse: any) => {
          this.products.push(productResponse);
        });
      });
    });
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.purchases.slice(startIndex, endIndex);
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
