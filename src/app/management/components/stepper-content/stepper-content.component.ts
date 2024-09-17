import { Component } from '@angular/core';
import {Crop} from "../../model/crop";
import {CropsService} from "../../services/crops.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'crops-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css']
})
export class CropsStepperContentComponent {

  combinedFormData: any = {};

  handleFormCompleted1(data: any) {
    this.combinedFormData = { ...this.combinedFormData, ...data };
  }

  handleFormCompleted2(data: any) {
    this.combinedFormData = { ...this.combinedFormData, ...data };
  }
}
