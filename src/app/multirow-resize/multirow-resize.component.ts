import { Component, OnInit } from '@angular/core';
import { MultirowResizeService } from './multirow-resize.service';

// https://www.grapecity.com/wijmo/demos/Grid/MultiRow/LayoutDefinition/angular
@Component({
  selector: 'app-multirow-resize',
  templateUrl: './multirow-resize.component.html',
  styleUrls: ['./multirow-resize.component.scss'],
  providers: [MultirowResizeService]
})
export class MultirowResizeComponent implements OnInit {
  orders: any;
  layoutDefs: any;
  currentLayout: any;

  constructor(private dataService: MultirowResizeService) {
      let appData = dataService.getData();
      this.orders = appData.orders;
      this.layoutDefs = appData.layoutDefs;
      this.currentLayout = appData.layoutDefs.currentItem;
  }

  ngOnInit() {}

}
