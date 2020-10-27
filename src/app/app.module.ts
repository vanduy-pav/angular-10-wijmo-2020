import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WjCoreModule } from '@grapecity/wijmo.angular2.core';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridDetailModule } from '@grapecity/wijmo.angular2.grid.detail';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SpreadModule } from 'src/app/shares/spread/spread.module';
import { TestSpreadComponent } from 'src/app/test-spread/test-spread.component';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { ManySpreadViewComponent } from './many-spread-view/many-spread-view.component';
import { MessageComponent } from './message/message.component';
import { MultirowResizeComponent } from './multirow-resize/multirow-resize.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    WjGridModule,
    WjGridFilterModule,
    WjCoreModule,
    WjInputModule,
    WjGridDetailModule,
    WjGridMultirowModule,
    SpreadModule
  ],
  declarations: [AppComponent, AutocompleteComponent, TestSpreadComponent, ManySpreadViewComponent, DateTimeComponent, MessageComponent, MultirowResizeComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
