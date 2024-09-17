import {Component, Input} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";
import {NewTransactionDialogContentComponent} from "../../components/new-transaction-dialog-content/new-transaction-dialog-content.component";
import {MatDialog} from "@angular/material/dialog";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";


@Component({
  selector: 'app-costs-gallery-content',
  templateUrl: './costs-gallery-content.component.html',
  styleUrls: ['./costs-gallery-content.component.css']
})

export class CostsGalleryContentComponent {
  @Input() costos: Transaction[]=[];

  constructor(private transactionsService: TransactionsService, private dialog: MatDialog, private tokenStorage: TokenStorageService) {  }
  ngOnInit(): void {
    this.loadData(this.tokenStorage.getUser().id);
  }

  loadData(id: number){
    this.transactionsService.getAll().subscribe((response:any)=>{
      const costos = response.filter((transaction: any) => transaction.transactionType === 'Cost' && transaction.userId === id);
      this.costos = costos;
    });
  }

  deleteCost(id: number) {
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
