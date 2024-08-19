import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoansComponent } from './pages/loans/loans.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'transactions', component:TransactionsComponent},
  {path:'loans', component: LoansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
