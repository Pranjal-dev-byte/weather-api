import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'api-services';
  dataObj;
  constructor(private dataService: ConfigService) {}
  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.dataObj = data;
      console.log(this.dataObj.current);
      // if(this.dataObj)
    });
  }
}
