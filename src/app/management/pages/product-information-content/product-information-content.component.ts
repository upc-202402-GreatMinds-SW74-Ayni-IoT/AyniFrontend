import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {CropdataService} from "../../services/cropdata.service";

@Component({
  selector: 'app-product-information-content',
  templateUrl: './product-information-content.component.html',
  styleUrls: ['./product-information-content.component.css']
})
export class ProductInformationContentComponent implements OnInit{

  product: Product = new Product();
  crops="/crops";
  form: any = {
    pickUpWeed: false,
    fertilizeCrop: false,
    oxygenateCrop: false,
    makeCropLine: false,
    makeCropHole: false,
    name: '',
    productId: 0
  };

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private dataService: CropdataService) {}
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
        this.productsService.getById(productId).subscribe((productResponse: any) => {
          this.product=productResponse;
          this.form.productId=productId;
        });
      });
  }

  saveData() {
    this.dataService.setFormData(this.form);
  }
}
