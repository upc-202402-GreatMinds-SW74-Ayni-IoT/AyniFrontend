import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";
import {NewTransactionDialogContentComponent} from "../../components/new-transaction-dialog-content/new-transaction-dialog-content.component";
import {MatDialog} from "@angular/material/dialog";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-profits-gallery-content',
  templateUrl: './profits-gallery-content.component.html',
  styleUrls: ['./profits-gallery-content.component.css']
})
export class ProfitsGalleryContentComponent implements OnInit{
  @Input() profits: Transaction[]=[];

  constructor(private transactionsService: TransactionsService, private dialog: MatDialog, private tokenStorage: TokenStorageService) {}
  ngOnInit(): void {
    this.loadData(this.tokenStorage.getUser().id);
  }

  loadData(id: number){
    this.transactionsService.getAll().subscribe((response:any)=>{
      const profits = response.filter((transaction:any) => transaction.transactionType === 'Profit' && transaction.userId === id);
      console.log(profits);
      this.profits = profits;
    });
  }

  deleteProfit(id: number) {
    this.transactionsService.delete(id).subscribe(()=>
      {
        this.loadData(this.tokenStorage.getUser().id);
      }
    )
  }

  openDialog() {
    this.dialog.open(NewTransactionDialogContentComponent, {
      width:'30%'
    });
  }
}
