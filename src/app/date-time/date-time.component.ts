import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {

  private _min: Date;
  dateFormat = 'yyyy/MM/dd HH:mm';
  timeStep = 30;


  get minValue(): Date {
    if (!this._min) {
      this._min = new Date(this.maxValue.getFullYear(), this.maxValue.getMonth(), 1);
    }

    return this._min;
  }

  maxValue = new Date();

  value = ''

  constructor() { }

  ngOnInit(): void {
  }

  onGotFocus() {

  }

  onInvalidInput(value: any) {
    console.log('onInvalidInput', value);
    // value.cancel = true;
    // this.onLostFocus()
  }

  onValueChange(value: any) {
    console.log("value changed", value);
  }

  onLostFocus() {
    console.log('lostFocus: ' + this.value);
  }

  onTextChanged() {
    console.log(this.value);
  }

}
