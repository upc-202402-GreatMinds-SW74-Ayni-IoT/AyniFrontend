import {Component, Input} from '@angular/core';
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card-content',
  templateUrl: './product-card-content.component.html',
  styleUrls: ['./product-card-content.component.css']
})
export class ProductCardContentComponent {
  @Input() product: Product = new Product();

  constructor(private router: Router) {}

  viewProductDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}
