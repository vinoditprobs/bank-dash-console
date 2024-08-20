import { Component } from '@angular/core';
import { PageNameService } from '../../services/page-name.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private pageService: PageNameService) {}

ngOnInit(){
  this.pageService.changePageName('Dashboard');
}

}
