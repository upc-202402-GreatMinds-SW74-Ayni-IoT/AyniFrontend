import { Injectable } from '@angular/core';
import {Rate} from "../model/rate";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class RatesService extends BaseService<Rate>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/rates';
  }
}
