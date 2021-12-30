import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  seriesNames = this.storage.getKeys();
  series = {};

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {

    if(!this.seriesNames) {
      return;
    }

    this.seriesNames.forEach((serieName) => {
      if(!serieName) return;
      let points = this.storage.get(serieName) as {};
      this.series = {...this.series, [serieName]: points}
    })
  }

}
