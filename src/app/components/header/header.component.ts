import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink : '/',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Transactions',
        icon: 'pi pi-transactions',
        routerLink : '/transactions',
      },
      {
        label: 'Accounts',
        icon: 'pi pi-accounts'
      },
      {
        label: 'Investments',
        icon: 'pi pi-investments'
      },
      {
        label: 'Credit Cards',
        icon: 'pi pi-creditCard'
      },
      {
        label: 'Loans',
        icon: 'pi pi-loans',
        routerLink : '/loans'
      },
      {
        label: 'Services',
        icon: 'pi pi-services'
      },
      {
        label: 'My Privileges',
        icon: 'pi pi-privileges'
      },
      {
        label: 'Setting',
        icon: 'pi pi-setting'
      },
      /* {
           label: 'Devices',
           icon: 'pi pi-desktop',
           items: [
               {
                   label: 'Phone',
                   icon: 'pi pi-mobile'
               },
               {
                   label: 'Desktop',
                   icon: 'pi pi-desktop'
               },
               {
                   label: 'Tablet',
                   icon: 'pi pi-tablet'
               }
           ]
       }*/
    ]
  }
}
