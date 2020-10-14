import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WjCoreModule } from '@grapecity/wijmo.angular2.core';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { SpreadComponent } from 'src/app/shares/spread/spread.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WjGridModule,
    WjInputModule,
    WjCoreModule,
  ],
  declarations: [
    SpreadComponent
  ],
  exports: [
    SpreadComponent
  ]
})
export class SpreadModule { }
