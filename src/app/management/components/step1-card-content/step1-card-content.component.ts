import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Crop} from "../../model/crop";
import {CropdataService} from "../../services/cropdata.service";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'crops-step1-card-content',
  templateUrl: './step1-card-content.component.html',
  styleUrls: ['./step1-card-content.component.css']
})
export class CropsStep1CardContentComponent {
  @Output() formCompleted1 = new EventEmitter<any>();
  form: any = {};
  cropform1: any = {
    pickUpWeed: false,
    fertilizeCrop: false,
    oxygenateCrop: false,
    makeCropLine: false,
    makeCropHole: false,
    name: '',
    productId: 0,
    userId: 0
  };

  constructor(private dataService: CropdataService, private tokenStorage: TokenStorageService) {
    this.form = this.dataService.getFormData();
  }

  saveData() {
    this.cropform1.userId = this.tokenStorage.getUser().id;
    this.cropform1.productId = this.form.productId;
    this.formCompleted1.emit(this.cropform1);
  }
}
