import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/services/base.service';
import { Sensor } from 'src/app/management/model/sensor';

@Injectable({
  providedIn: 'root',
})
export class SensorService extends BaseService<Sensor> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/sensors';
  }
}
