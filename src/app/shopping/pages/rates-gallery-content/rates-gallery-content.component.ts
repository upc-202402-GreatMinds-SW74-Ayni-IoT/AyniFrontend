import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../management/model/product";
import {ProductsService} from "../../../management/services/products.service";
import {Order} from "../../model/order";
import {OrdersService} from "../../services/orders.service";
import {PageEvent} from "@angular/material/paginator";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-rates-gallery-content',
  templateUrl: './rates-gallery-content.component.html',
  styleUrls: ['./rates-gallery-content.component.css']
})
export class RatesGalleryContentComponent {
  purchases: Order[] = [];
  products: Product[] = [];
  pagedList: Order[] = [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 2;
  pageSizeOptions: number[] = [2, 4, 6, 8];

  constructor(private ordersService: OrdersService, private salesService: SalesService, private router: Router, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.loadData(this.tokenStorage.getUser().id);
  }

  loadData(userId: number) {
    this.ordersService.getAll().subscribe((response: any) => {
      this.purchases = response.filter((purchase: any) => purchase.orderedBy === userId && purchase.status==='finalized');
      this.pagedList = this.purchases.slice(0,2);
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
