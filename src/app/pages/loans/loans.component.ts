import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss'
})
export class LoansComponent {

  products: any

  constructor() {}

  ngOnInit(): void {
    this.products = [
      { sN: '01.', loanMony: '$100,000', leftRepay: '$40,500', duration: 10, interestRate: '12%', installment: '$2,000 / month' },
      { sN: '02.', loanMony: '$75,000', leftRepay: '$20,000', duration: 8, interestRate: '10%', installment: '$1,500 / month' },
      { sN: '03.', loanMony: '$50,000', leftRepay: '$15,000', duration: 5, interestRate: '8%', installment: '$1,000 / month' },
      { sN: '04.', loanMony: '$120,000', leftRepay: '$60,000', duration: 12, interestRate: '15%', installment: '$3,000 / month' },
      { sN: '05.', loanMony: '$90,000', leftRepay: '$30,000', duration: 9, interestRate: '11%', installment: '$2,500 / month' }
    ];
  }


}
