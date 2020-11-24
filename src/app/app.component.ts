import { Component, OnInit } from '@angular/core';
import { DataSvcService, autocompleteData } from "./data-svc.service";

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridPdf from '@grapecity/wijmo.grid.pdf';
import * as wjcPdf from '@grapecity/wijmo.pdf';
import { BehaviorSubject } from 'rxjs';
import {IData } from './autocomplete/autocomplete.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {

  data;
  countryMap;
  groups;
  wjGrid;

  autocompleteSource: wjcCore.CollectionView;
  data$: BehaviorSubject<IData>;

  constructor(private dataSvc:DataSvcService){
    this.data=dataSvc.getData(50);
    this.autocompleteSource = new wjcCore.CollectionView(autocompleteData);
  }

  ngOnInit() {
    this.data$ = new BehaviorSubject<IData>({
      displayMemberPath: 'name',
      selectedValuePath: 'value',
      itemsSource: autocompleteData,
      selectedValue: 2
    });
  }

  doPrint(){
    var doc = new wjcCore.PrintDocument();
    doc.append('sample title');
    doc.append(document.getElementById('hId'));
    doc.append("<img src='https://www.gstatic.com/webp/gallery3/1.png' />");
    doc.append(document.getElementById('someID'));
    doc.append(document.getElementById('wjGrid'));
    if(this.wjGrid){
      var tbl = this.renderTable(this.wjGrid);
      doc.append(tbl);
    }
    doc.print();

  }

  init(grid){
    this.wjGrid=grid;
  }

  private renderTable(flex: wjcGrid.FlexGrid) {
    // start table
    var tbl = '<table>';
    // headers
    if (flex.headersVisibility & wjcGrid.HeadersVisibility.Column) {
      tbl += '<thead>';
      for (var r = 0; r < flex.columnHeaders.rows.length; r++) {
        tbl += this.renderRow(flex.columnHeaders, r);
      }
      tbl += '</thead>';
    }

    // body
    tbl += '<tbody>';
    for (var r = 0; r < flex.rows.length; r++) {
      tbl += this.renderRow(flex.cells, r);
    }
    tbl += '</tbody>';

    // done
    tbl += '</table>';
    return tbl;
  }

  private renderRow(panel: wjcGrid.GridPanel, r:number) {
    var tr = '',
      row = panel.rows[r],
      nextCol = -1;
    if (row.renderSize > 0) {
      // start row/group row
      tr += row instanceof wjcGrid.GroupRow
        ? '<tr style="font-weight:bold;height:2em;border-top:2px solid grey">'
        : '<tr>';

      // render each column
      for (var c = 0; c < panel.columns.length; c++) {
        var col = panel.columns[c];
        if (col.renderSize > 0 && c >= nextCol) {
          var colSpan = '',
            mergedRange = null;

          // get cell content
          var content = panel.getCellData(r, c, true),
            data = panel.getCellData(r, c, false),
            isHtml = row.isContentHtml || col.isContentHtml;
          if (!isHtml && wjcCore.isString(data)) {
            content = wjcCore.escapeHtml(content);
          }
          if (wjcCore.isBoolean(data)) {
            content = data ? '&#9745;' : '&#9744;';
          }
          if (row instanceof wjcGrid.GroupRow && c == panel.columns.firstVisibleIndex) {
            content = row.getGroupHeader();
          }

          // handle merged cells
          mergedRange = panel.grid.getMergedRange(panel, r, c, false);
          if (mergedRange && mergedRange.columnSpan > 1) {
            colSpan = ' colspan="' + mergedRange.columnSpan + '"';
            nextCol = c + mergedRange.columnSpan;
          }

          // get cell style
          var style = 'width:' + (mergedRange ? mergedRange.getRenderSize(panel).width : col.renderSize) + 'px;';
          if (col.getAlignment()) {
            style += 'text-align:' + col.getAlignment() + ';';
          }

          // add cell to row
          if (panel.cellType == wjcGrid.CellType.ColumnHeader) {
            tr += '<th style="' + style + '"' + colSpan + '>' + content + '</th>';
          } else {
            tr += '<td style="' + style + '"' + colSpan + '>' + content + '</td>';
          }
        }
      }

      // close row
      tr += '</tr>';
    }
    return tr;
  }

  // exportGrid(grid) {
  //   grid.autoSizeColumns();
  //   grid.autoSizeRows();
  //   const doc = new wjcPdf.PdfDocument({
  //     ended: function(s, e) {
  //       wjcPdf.saveBlob(e.blob, 'FlexGrid.pdf');
  //     }
  //   });
  //   wjcGridPdf.FlexGridPdfConverter.draw(grid, doc);
  //   doc.end();
  // }

  exportGrid(grid) {
    grid.autoSizeColumns();
    grid.autoSizeRows();

    const pdfDocumentOptions = {
      pageSettings: {
        layout: 1, // 横
        size: 3,
        margins: {            // ポイント単位 1pt=0.35mm 1mm=2.83pt
          top: 5 * 2.83,
          bottom: 5 * 2.83,
          left: 18 * 2.83,
          right: 5 * 2.83
        }
      }
    };

    const doc = new wjcPdf.PdfDocument({
      pageSettings: {
        layout: 1, // 横
        size: 3,
        margins: {            // ポイント単位 1pt=0.35mm 1mm=2.83pt
          top: 5 * 2.83,
          bottom: 5 * 2.83,
          left: 18 * 2.83,
          right: 5 * 2.83
        }
      },
      ended: function(s, e) {
        wjcPdf.saveBlob(e.blob, 'FlexGrid.pdf');
      }
    });
    // doc.registerFont({
    //   source: 'src/app/ipaexg.ttf',
    //   name: 'ipaexg',
    //   style: 'normal',
    //   weight: 'normal',
    //   sansSerif: true
    // });
    wjcGridPdf.FlexGridPdfConverter.draw(grid, doc);
    doc.end();
  }

}
