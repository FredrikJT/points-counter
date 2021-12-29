import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(private storage: LocalStorageService) { }

  seriesPoints: Number[] = [];

  ngOnInit(): void {

    console.log(this.storage.getKeys())



    const seriesNames = this.storage.getKeys();

    if(seriesNames === null) {
      return;
    }


    console.log(seriesNames);
    seriesNames.forEach(name => {
      console.log(name);
      let points = this.storage.get(name);
      //Skapa seriesPoints array och presentera i template
    });



    // seriesNames.forEach(seriesName => {
    //   let points = this.storage.get(seriesName) as Number[];
    //   seriesPoints.push(...points);
    // });

    // console.log(seriesPoints[0]);
  }

  pushPoints(points: []):void {
    this.seriesPoints.push(...points);
  }



  points = [0,1,2,3,4,5];

}
