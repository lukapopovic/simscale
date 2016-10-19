import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../shared';

@Component({
  selector: 'sim-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() project: IProject; 
  API_URL: string = 'https://www.simscale.com'
  FALLBACK_PICTURE: string = '../../assets/fallbackPic.jpg'
  resultThumbnail: string;
  resultId: string;
  resultDate: string

  constructor() { }

  ngOnInit() {
      this.resultId = this.project.resultIds[0];
      this.resultId ? this.resultThumbnail = this.API_URL + this.project.resultThumbnailUrls[this.resultId] 
                      : this.resultThumbnail = this.FALLBACK_PICTURE;
      this.resultDate = this.parseDate(this.project.lastModificationDate);
  }

  parseDate(date: string): string {
      var currentDate: any = new Date();
      var changeDate: any = new Date(date);
      var yearDifference: number = currentDate.getYear() - changeDate.getYear();
      var monthDifference: number = currentDate.getMonth() - changeDate.getMonth();
      var dayDifference: number = currentDate.getDay() - changeDate.getDay();
      var returnString: string = 'Changed ';

      if(yearDifference > 0) {
        returnString += yearDifference > 1 ? yearDifference + ' years ago' : yearDifference + ' year ago';
      } else if (monthDifference > 0) {
        returnString += monthDifference >= 1 ? monthDifference + ' months ago' : monthDifference + ' month ago';
      } else {
        returnString += dayDifference >= 1 ? dayDifference + ' days ago' : dayDifference + ' day ago';
      }

      return returnString;
  }
}
