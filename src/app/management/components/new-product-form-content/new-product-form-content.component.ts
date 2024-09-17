import { Component } from '@angular/core';
import {OrdersService} from "../../../shopping/services/orders.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-new-product-form-content',
  templateUrl: './new-product-form-content.component.html',
  styleUrls: ['./new-product-form-content.component.css']
})
export class NewProductFormContentComponent {
  productForm: Product;
  constructor(private productsService: ProductsService, private router: Router, private tokenStorage: TokenStorageService) {
    this.productForm={
      id: 0,
      name: '',
      description: '',
      recommendedCultivationDistance: '',
      recommendedCultivationDepth: '',
      recommendedGrowingClimate: '',
      recommendedSoilType: '',
      recommendedGrowingSeason: '',
      unitPrice: 0,
      imageUrl: '',
      userId: this.tokenStorage.getUser().id,
    };
  }

  onSubmit() {
    this.productsService.create(this.productForm).subscribe(() => {
      this.router.navigate(['/products']);
      location.reload();
    });
  }
}
