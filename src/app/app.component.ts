import { Component } from '@angular/core';
import { Pager } from './cc-paginator/pager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-paginator';

  pagerOnChange(pager: Pager): void {
    // result:
    console.log(pager);
  }
}
