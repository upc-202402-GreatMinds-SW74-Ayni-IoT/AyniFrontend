import { Injectable } from '@angular/core';
import {Order} from "../model/order";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService<Order> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/orders';
  }

  finalizeOrder(orderId: number): Observable<Order> {
    const endpoint = `${this.basePath}${this.resourceEndpoint}/${orderId}/finalizations`;
    return this.http.post<Order>(endpoint, {}, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  qualifyOrder(orderId: number): Observable<Order> {
    const endpoint = `${this.basePath}${this.resourceEndpoint}/${orderId}/qualifications`;
    return this.http.post<Order>(endpoint, {}, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
