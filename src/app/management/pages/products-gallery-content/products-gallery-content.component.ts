import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {NewProductFormContentComponent} from "../../components/new-product-form-content/new-product-form-content.component";

@Component({
  selector: 'app-products-gallery-content',
  templateUrl: './products-gallery-content.component.html',
  styleUrls: ['./products-gallery-content.component.css']
})
export class ProductsGalleryContentComponent implements OnInit{

  productsList: Product[]= [];
  pagedList: Product[]= [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];

  constructor(private productsService: ProductsService, private router: Router, public dialog:MatDialog) {
  }

  navigateToProductDetails(id: number) {
    this.router.navigate(['products/details', id]);
  }
  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event:any) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
  ngOnInit(): void {
    this.productsService.getAll().subscribe((response:any) => {
      this.productsList = response;
      this.pagedList = this.productsList.slice(0,6)
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.productsList.length;
    });
  }

  addNewProduct() {
    this.dialog.open(NewProductFormContentComponent);
  }
}
