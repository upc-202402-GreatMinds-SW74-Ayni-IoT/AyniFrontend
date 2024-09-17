import { Component } from '@angular/core';

@Component({
  selector: 'sales-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css']
})
export class SalesStepperContentComponent {

  combinedFormData: any = {};

  handleFormCompleted1(data: any) {
    this.combinedFormData = { ...this.combinedFormData, ...data };
  }
}
