import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageNameService {

  private pageNameSource = new BehaviorSubject<string>('Dashboard');
  currentPageName = this.pageNameSource.asObservable();

  changePageName(pageName: string) {
    this.pageNameSource.next(pageName);
  }
}
