import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { WjAutoComplete } from '@grapecity/wijmo.angular2.input';
import { Observable } from 'rxjs';
import '@grapecity/wijmo.touch'; // support drag/drop on touch devices

export interface IData {
  selectedValue: string | number;
  itemsSource: any[];
  displayMemberPath: string;
  selectedValuePath: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  _selectedValue: string | number | null;

 @Input() displayMemberPath;
 @Input() selectedValuePath;

  @Input()
  set selectedValue(value: any) {
    this._selectedValue = value;
  }

  get selectedValue() {
    return this._selectedValue;
  }

  @Input()
  selectedItem: any;

  @Input()
  itemsSource: CollectionView;

  @Input()
  set dataSource$(value: Observable<IData>) {
    if (value) {
      value.subscribe((v: IData) => {
        this.selectedValuePath = v.selectedValuePath;
        this.displayMemberPath = v.displayMemberPath;
        this.itemsSource = new CollectionView(v.itemsSource);
        this.selectedValue = v.selectedValue;
      });
    }
  }

  @ViewChild(WjAutoComplete) autoComplete: WjAutoComplete;
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.autoComplete.selectedValue = this.selectedValue;
    });
  }

}