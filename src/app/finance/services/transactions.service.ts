import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Transaction} from "../model/transaction-model";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService extends BaseService<Transaction>{
    constructor(http:HttpClient) {
      super(http);
      this.resourceEndpoint = '/transactions';
    }
}
