import { Component } from '@angular/core';
import {Product} from "../../../management/model/product";
import {ProductsService} from "../../../management/services/products.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import {NewProductFormContentComponent} from "../../../management/components/new-product-form-content/new-product-form-content.component";
import {Sale} from "../../model/sale";
import {SalesService} from "../../services/sales.service";
import {NewSaleFormContentComponent} from "../../components/new-sale-form-content/new-sale-form-content.component";

@Component({
  selector: 'app-sales-gallery-content',
  templateUrl: './sales-gallery-content.component.html',
  styleUrls: ['./sales-gallery-content.component.css']
})
export class SalesGalleryContentComponent {
  salesList: Sale[]= [];
  pagedList: Sale[]= [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];

  constructor(private salesService: SalesService, private router: Router, public dialog:MatDialog) {
  }

  navigateToSaleDetails(id: number) {
    this.router.navigate(['sales/details', id]);
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.salesList.slice(startIndex, endIndex);
  }

  onResize(event:any) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
  ngOnInit(): void {
    this.salesService.getAll().subscribe((response:any) => {
      this.salesList = response;
      this.pagedList = this.salesList.slice(0,6)
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.salesList.length;
    });
  }
}
