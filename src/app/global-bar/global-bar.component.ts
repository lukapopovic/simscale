import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sim-global-bar',
    templateUrl: './global-bar.component.html',
    styleUrls: ['./global-bar.component.scss']
})
export class GlobalBarComponent {
    @Output() keyword = new EventEmitter<string>();
    pageTitle = "Public Projects";

    searchProjects(keyword) {
	    let emitKeyword = keyword || '';
  	    this.keyword.emit(emitKeyword);
    }
}
