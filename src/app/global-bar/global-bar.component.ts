import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sim-global-bar',
  templateUrl: './global-bar.component.html',
  styleUrls: ['./global-bar.component.scss']
})
export class GlobalBarComponent implements OnInit {
  @Output() keyword = new EventEmitter<string>();
  pageTitle = "Public Projects";

  constructor() { }

  ngOnInit() {
  }

  searchProjects(keyword) {
  	let emitKeyword = keyword || '';
  	this.keyword.emit(emitKeyword);
  }
}
