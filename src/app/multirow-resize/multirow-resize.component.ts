import { Component, OnInit, ViewChild } from '@angular/core';
import '@grapecity/wijmo.touch';
import {WjMultiRow} from '@grapecity/wijmo.angular2.grid.multirow';
import {AllowResizing} from '@grapecity/wijmo.grid';
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

  @ViewChild(WjMultiRow, {static: true}) multirow: WjMultiRow;

  constructor(private dataService: MultirowResizeService) {
    let appData = dataService.getData();
    this.orders = appData.orders;
    this.layoutDefs = appData.layoutDefs;
    this.currentLayout = appData.layoutDefs.currentItem;
  }

  ngOnInit() {
    this.multirow.allowResizing = AllowResizing.Both;
  }

}
