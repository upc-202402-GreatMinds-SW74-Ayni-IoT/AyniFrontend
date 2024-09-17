export class Order {
  id: number;
  saleId: number;
  orderedBy: number;
  acceptedBy: number;
  description: string;
  quantity: number;
  status: string;
  orderedDate: string | null;
  totalPrice: number;
  paymentMethod: string;

  constructor() {
    this.id = 0;
    this.saleId = 0;
    this.orderedBy = 0;
    this.acceptedBy = 0;
    this.description = '';
    this.quantity = 0;
    this.status = '';
    this.orderedDate = '';
    this.totalPrice = 0;
    this.paymentMethod = '';
  }
}
