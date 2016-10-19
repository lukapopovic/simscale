import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DataService, IProject } from '../shared';


@Component({
  selector: 'sim-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input() searchKeyword;
  projects;
  filteredProjects;


  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getProjects().subscribe(projects => this.projects = this.filteredProjects = projects);
  }

  filterProjects(projects) {
  	this.filteredProjects = projects.filter((project: IProject) => {
  		return project.projectName.includes(this.searchKeyword);
  	});
  }

  ngOnChanges(simpleChanges) {
  	console.log(simpleChanges);
  	if(this.projects) {
  		this.filterProjects(this.projects);	
  	}
  }
}
