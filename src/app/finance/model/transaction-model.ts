export class Transaction {
  id: number;
  transactionType: string;
  costName: string;
  date: string;
  description: string;
  price: number;
  quantity: string;
  userId: number;

  constructor(){
    this.id=0;
    this.transactionType= '';
    this.costName = '';
    this.date = '';
    this.description = '';
    this.price = 0;
    this.quantity = '';
    this.userId = 0;
  }

}
