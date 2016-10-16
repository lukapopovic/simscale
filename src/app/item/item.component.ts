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

  constructor() { }

  ngOnInit() {
      this.resultId = this.project.resultIds[0];
      this.resultId ? this.resultThumbnail = this.API_URL + this.project.resultThumbnailUrls[this.resultId] 
                      : this.resultThumbnail = this.FALLBACK_PICTURE;
  }

}
