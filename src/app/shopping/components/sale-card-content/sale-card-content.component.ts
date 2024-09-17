import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Sale} from "../../model/sale";

@Component({
  selector: 'app-sale-card-content',
  templateUrl: './sale-card-content.component.html',
  styleUrls: ['./sale-card-content.component.css']
})
export class SaleCardContentComponent {
  @Input() sale: Sale = new Sale();

  constructor(private router: Router) {}

  viewProductDetails(id: number) {
    this.router.navigate(['/sales', id]);
  }
}
