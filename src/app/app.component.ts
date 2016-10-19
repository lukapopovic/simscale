import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'sim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchKeyword: string;

  onSearch(keyword) {
  	this.searchKeyword = keyword;
  }
}
