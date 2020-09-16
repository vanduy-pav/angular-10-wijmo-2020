import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { Observable } from 'rxjs';

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
    console.log('set selected value', value);
    // const selectedItem = this.itemsSource ? this.itemsSource.items.find(it => it.value === value) : undefined;

    // if (selectedItem) {
    //   this.selectedItem = selectedItem;
    // }
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
        console.log('set selected value from data$', v.selectedValue);
        this.selectedValuePath = v.selectedValuePath;
        this.displayMemberPath = v.displayMemberPath;
        this.itemsSource = new CollectionView(v.itemsSource);
        this.selectedValue = v.selectedValue;
      });
    }
  }

  constructor(private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    // console.log("selected value", this.selectedValue);
    console.log("selectedItem---------", this.selectedItem);
    // this._cdr.detectChanges();
  }

}