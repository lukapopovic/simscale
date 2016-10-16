import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared';


@Component({
  selector: 'sim-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  projects;

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getProjects().subscribe(projects => this.projects = projects);
  }
}
