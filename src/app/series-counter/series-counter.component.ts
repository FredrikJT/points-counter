import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-counter',
  templateUrl: './series-counter.component.html',
  styleUrls: ['./series-counter.component.scss']
})
export class SeriesCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  seriesPoints: Number[] = [
  ];


  onChange(results: Number[], index: any) {
    this.seriesPoints[index] = results[index];
    console.log(results, index, this.seriesPoints[0])
  }
}
