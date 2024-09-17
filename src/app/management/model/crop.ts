export class Crop {
  id: number;
  pickUpWeed: boolean;
  fertilizeCrop: boolean;
  oxygenateCrop: boolean;
  makeCropLine: boolean;
  makeCropHole: boolean;
  wateringDays: number;
  pestCleanupDays: number;
  name: string;
  productId: number;
  userId: number;

  constructor() {
    this.id = 0;
    this.pickUpWeed = false;
    this.fertilizeCrop = false;
    this.oxygenateCrop = false;
    this.makeCropLine = false;
    this.makeCropHole = false;
    this.wateringDays = 0;
    this.pestCleanupDays = 0;
    this.name = '';
    this.productId = 0;
    this.userId = 0;
  }
}
