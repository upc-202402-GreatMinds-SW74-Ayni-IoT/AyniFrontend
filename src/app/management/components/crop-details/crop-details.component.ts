import {
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { interval, Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/authentication/services/token-storage.service';
import { Crop } from 'src/app/management/model/crop';
import { CropsService } from 'src/app/management/services/crops.service';
import { SensorService } from 'src/app/management/services/sensors.service';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css'],
})
export class CropDetailsComponent implements OnInit, OnDestroy {
  crop?: Crop;

  // Chart Types
  public lineChartType: ChartType = 'line';

  // Chart Configurations
  public temperatureChart: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Temperature',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  public hydrationChart: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Hydration',
        backgroundColor: 'rgba(54,162,235,0.2)',
        borderColor: 'rgba(54,162,235,1)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  public oxygenationChart: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Oxygenation',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  public waterLevelChart: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Water Level',
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  private dataSubscription: Subscription | undefined;

  @ViewChildren(BaseChartDirective) charts!: QueryList<BaseChartDirective>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cropsService: CropsService,
    private sensorService: SensorService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    const cropId = Number(this.route.snapshot.paramMap.get('id'));

    this.cropsService.getById(cropId).subscribe((crop) => {
      this.crop = crop;
    });

    this.dataSubscription = interval(2500).subscribe(() =>
      this.fetchDashboardsData(cropId)
    );
  }

  fetchDashboardsData(cropId: number): void {
    this.sensorService.getById(cropId).subscribe((response) => {
      const currentTime = new Date().toLocaleTimeString(); // Timestamp for x-axis labels

      // Update Temperature Chart
      this.updateChart(
        this.temperatureChart,
        response.temperature,
        currentTime
      );

      // Update Hydration Chart
      this.updateChart(this.hydrationChart, response.hydration, currentTime);

      // Update Oxygenation Chart
      this.updateChart(
        this.oxygenationChart,
        response.oxygenation,
        currentTime
      );

      // Update Water Level Chart
      this.updateChart(this.waterLevelChart, response.waterLevel, currentTime);

      this.refreshCharts();
    });
  }

  updateChart(
    chartData: ChartConfiguration['data'],
    value: number,
    label: string
  ): void {
    chartData.datasets[0].data.push(value);
    chartData.labels?.push(label);

    // Limit to 10 data points for simplicity
    if (chartData.datasets[0].data.length > 10) {
      chartData.datasets[0].data.shift();
      chartData.labels?.shift();
    }
  }

  refreshCharts(): void {
    this.charts.forEach((chart) => chart.update());
  }

  goBack(): void {
    if (this.tokenStorage.getUser().roles[0].role === 'ROLE_FARMER')
      this.router.navigate(['farmer-home']);
    else this.router.navigate(['merchant-home']);
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
