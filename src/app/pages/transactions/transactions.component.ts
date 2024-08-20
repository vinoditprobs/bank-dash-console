import { Component } from '@angular/core';
import { PageNameService } from '../../services/page-name.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {


  constructor(private pageService: PageNameService) {}

ngOnInit(){
  this.pageService.changePageName('Transactions');
}

}
