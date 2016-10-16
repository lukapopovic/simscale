import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sim-global-bar',
  templateUrl: './global-bar.component.html',
  styleUrls: ['./global-bar.component.scss']
})
export class GlobalBarComponent implements OnInit {
    pageTitle = "Public Projects";

  constructor() { }

  ngOnInit() {
  }

}
