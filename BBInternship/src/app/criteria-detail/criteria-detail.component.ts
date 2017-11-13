import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-criteria-detail',
  templateUrl: './criteria-detail.component.html',
  styleUrls: ['./criteria-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CriteriaDetailComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
