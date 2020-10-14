import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData } from './autocomplete/autocomplete.component';

export const autocompleteData = [
  {name: '133', value: 123},
  {name: 'name 1', value: 1},
  {name: 'name 2', value: 2},
  {name: 'name 3', value: 3}
];

@Injectable({providedIn: 'root'})
export class DataSvcService {

  constructor() { }

  getData(count): any[] {
    const dates = [
      '2019/07/01 -              ',
      '2019/07/01 - 2019/07/17',
      '2019/01/01 - 2019/03/31',
      '2017/07/01 - 2018/10/31',
      '2017/04/01 - 2018/04/30',
      '1899/01/01 - 2019/09/25'
    ];

    // create some random data
    const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    const data = [];

    for (let i = 0; i < count; i++) {
      const selectedValue = this.getRandomInt(1, 3);
      data.push({
        id: i,
        date: dates[i],
        time: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
        country: countries[i % countries.length],
        countryMapped: i % countries.length,
        downloads: Math.round(Math.random() * 20000),
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000,
        checked: i % 9 === 0,
        select: selectedValue,
        selectData$: new BehaviorSubject<IData>({
          displayMemberPath: 'name',
          selectedValuePath: 'value',
          itemsSource: autocompleteData,
          selectedValue
        })
      });
    }
    return data;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
