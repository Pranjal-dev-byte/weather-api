import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config.services';

@Component({
  selector: 'app-loc-search',
  templateUrl: './loc-search.component.html',
  styleUrls: ['./loc-search.component.css'],
})
export class LocSearchComponent implements OnInit {
  dataObj: any;
  loc = '';
  dir: string;
  constructor(private dataService: ConfigService) {}
  ngOnInit() {
    this.apiCall();
  }
  apiCall(loc = 'New York') {
    this.dataService.getData(loc).subscribe((data: any) => {
      this.dataObj = data;
      console.log(this.dataObj.current);
      this.dir = '';
      for (let char of data.current.wind_dir) {
        if (char === 'W') {
          this.dir += 'West';
        } else if (char === 'E') {
          this.dir += 'East';
        } else if (char === 'N') {
          this.dir += 'North';
        } else {
          this.dir += 'South';
        }
      }
      this.dataObj.current.wind_dir = this.dir;
    });
  }
}
