import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/products';
  }
}
