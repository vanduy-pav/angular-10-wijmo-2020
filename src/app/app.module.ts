import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridDetailModule } from "@grapecity/wijmo.angular2.grid.detail";
import { DataSvcService } from './data-svc.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, WjGridModule, WjGridFilterModule, WjInputModule, WjGridDetailModule ],
  declarations: [ AppComponent, AutocompleteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataSvcService]
})
export class AppModule { }
