export class Rate {
  id: number;
  rate: number;
  date: string;
  productId: number;
  userId: number;

  constructor() {
    this.id = 0;
    this.rate = 0;
    this.date = '';
    this.productId = 0;
    this.userId = 0;
  }
}
