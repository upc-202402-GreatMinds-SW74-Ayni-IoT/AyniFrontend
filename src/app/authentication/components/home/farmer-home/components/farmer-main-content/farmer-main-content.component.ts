import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProductsService} from "../../../../../../management/services/products.service";
import {Product} from "../../../../../../management/model/product";
import {CropsService} from "../../../../../../management/services/crops.service";
import {Crop} from "../../../../../../management/model/crop";

@Component({
  selector: 'app-farmer-main-content',
  templateUrl: './farmer-main-content.component.html',
  styleUrls: ['./farmer-main-content.component.css']
})
export class FarmerMainContentComponent {
  products !: Product[];
  crops !: Crop[];

  // Table
  displayedColumns: string[] = ['name', 'watered', 'pestCleaning'];
  dataSource!: MatTableDataSource<any>;
  constructor(private cropsService: CropsService,
              private productsService: ProductsService) {
    this.productsService.getAll()
      .subscribe((response: any) => {
        this.products = response;
      });
    this.cropsService.getAll()
      .subscribe((response: any) => {
        this.crops = response;
        this.dataSource = new MatTableDataSource(this.crops);
      });
  }
}
