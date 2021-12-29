import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-series-counter',
  templateUrl: './series-counter.component.html',
  styleUrls: ['./series-counter.component.scss']
})
export class SeriesCounterComponent implements OnInit {
  seriesName = new Date().toString();

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {

  }

  seriesPoints: Number[] = [
  ];


  onSubmit(series:any) {
    this.storage.set(this.seriesName, series)
  }
}
