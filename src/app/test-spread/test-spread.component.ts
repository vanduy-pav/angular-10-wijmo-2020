import { Component } from '@angular/core';
import { DataSvcService } from 'src/app/data-svc.service';

@Component({
  selector: 'app-test-spread',
  templateUrl: './test-spread.component.html',
  styleUrls: ['./test-spread.component.scss']
})
export class TestSpreadComponent {

  data;

  constructor(private dataService: DataSvcService) {
    this.data = dataService.getData(50);
  }

}
