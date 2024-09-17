export class Product {
  id: number;
  name: string;
  description: string;
  recommendedCultivationDistance: string;
  recommendedCultivationDepth: string;
  recommendedGrowingClimate: string;
  recommendedSoilType: string;
  recommendedGrowingSeason: string;
  unitPrice: number;
  imageUrl: string;
  userId: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.recommendedCultivationDistance = '';
    this.recommendedCultivationDepth = '';
    this.recommendedGrowingClimate = '';
    this.recommendedSoilType = '';
    this.recommendedGrowingSeason = '';
    this.unitPrice = 0;
    this.imageUrl = '';
    this.userId = 0;
  }
}
