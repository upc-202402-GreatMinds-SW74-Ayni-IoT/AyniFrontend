import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Crop} from "../model/crop";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CropsService extends BaseService<Crop> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/crops';
  }
}
