export class Sale {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  quantity: number;
  imageUrl: string;
  userId: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.unitPrice = 0;
    this.quantity = 0;
    this.imageUrl = '';
    this.userId = 0;
  }
}
