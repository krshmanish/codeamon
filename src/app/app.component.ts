import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  data: any;
  subscription: Subscription[] = [];
  isAvailable: boolean;
  constructor(private commonService: CommonService) {
    this.isAvailable = true;
  }

  onSearchClicked(event: any) {
    this.subscription.push(this.commonService.getFilterData(event.firstName, event.lastName).subscribe(res => {
      this.data = [];
      this.data = res;
      this.isAvailable = this.data.length ? true : false;
      console.log(this.isAvailable);

      console.log(this.data);
    }));
  }
}
