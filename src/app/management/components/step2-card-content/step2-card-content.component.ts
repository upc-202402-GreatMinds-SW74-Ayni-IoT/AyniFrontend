import {Component, EventEmitter, Output} from '@angular/core';
import {CropsService} from "../../services/crops.service";

@Component({
  selector: 'crops-step2-card-content',
  templateUrl: './step2-card-content.component.html',
  styleUrls: ['./step2-card-content.component.css']
})
export class CropsStep2CardContentComponent {
  @Output() formCompleted2 = new EventEmitter<any>();

  cropform2: any = {
    wateringDays: 0,
    pestCleanupDays: 0,
  };

  saveData() {
    this.formCompleted2.emit(this.cropform2);
  }
}
