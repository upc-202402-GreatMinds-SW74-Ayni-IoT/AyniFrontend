export class Crop {
  id: number;
  pickUpWeed: boolean;
  fertilizeCrop: boolean;
  oxygenateCrop: boolean;
  makeCropLine: boolean;
  makeCropHole: boolean;
  wateringDays: number;
  pestCleanupDays: number;
  recommendedTemperature: number;
  recommendedHumidity: number;
  recommendedOxygen: number;
  recommendedWaterLevel: number;
  name: string;
  productId: number;
  userId: number;
  imageUrl: string;

  constructor() {
    this.id = 0;
    this.pickUpWeed = false;
    this.fertilizeCrop = false;
    this.oxygenateCrop = false;
    this.makeCropLine = false;
    this.makeCropHole = false;
    this.wateringDays = 0;
    this.pestCleanupDays = 0;
    this.recommendedTemperature = 0;
    this.recommendedHumidity = 0;
    this.recommendedOxygen = 0;
    this.recommendedWaterLevel = 0;
    this.name = '';
    this.productId = 0;
    this.userId = 0;
    this.imageUrl = '';
  }
}
