import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSpreadComponent } from 'src/app/test-spread/test-spread.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { ManySpreadViewComponent } from './many-spread-view/many-spread-view.component';
import { MultirowResizeComponent } from './multirow-resize/multirow-resize.component';

const routes: Routes = [
  {path: 'spread', component: TestSpreadComponent},
  {path: 'many-spread', component: ManySpreadViewComponent},
  {path: 'date', component: DateTimeComponent},
  {path: 'spread-resize', component: TestSpreadComponent},
  {path: 'multirow-resize', component: MultirowResizeComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
