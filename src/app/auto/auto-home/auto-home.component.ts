import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auto-home',
  templateUrl: './auto-home.component.html',
  styleUrls: ['./auto-home.component.css']
})
export class AutoHomeComponent implements OnInit {
currentRate1 = 5;
currentRate2 = 4;
currentRate3 = 5;
  constructor(config: NgbCarouselConfig) { }

  ngOnInit() {
  }

}
