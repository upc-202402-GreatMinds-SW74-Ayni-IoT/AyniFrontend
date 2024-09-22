import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartOptions, ChartType, LabelItem } from 'chart.js';
import { TokenStorageService } from 'src/app/authentication/services/token-storage.service';
import { Crop } from 'src/app/management/model/crop';
import { CropsService } from 'src/app/management/services/crops.service';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css'],
})
export class CropDetailsComponent implements OnInit {
  crop?: Crop;

  // Chart data
  chartData = [
    { name: 'Temperature', value: 25 }, // Placeholder for now
    { name: 'Oxygenation', value: 70 }, // Placeholder for now
    { name: 'Hydration', value: 50 }, // Placeholder for now
  ];

  colorScheme = 'vivid';

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels = ['Temperature', 'Oxygenation', 'Hydration'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // Chart data (will be updated dynamically)
  public barChartData = [{ data: [25, 70, 50], label: 'Crop Metrics' }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cropsService: CropsService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    const cropId = Number(this.route.snapshot.paramMap.get('id'));

    this.cropsService.getById(cropId).subscribe((crop) => {
      this.crop = crop;
    });
  }

  goBack(): void {
    if (this.tokenStorage.getUser().roles[0].role === 'ROLE_FARMER')
      this.router.navigate(['farmer-home']);
    else this.router.navigate(['merchant-home']);
  }
}
