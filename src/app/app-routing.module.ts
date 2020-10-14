import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSpreadComponent } from 'src/app/test-spread/test-spread.component';
import { ManySpreadViewComponent } from './many-spread-view/many-spread-view.component';

const routes: Routes = [
  {path: 'spread', component: TestSpreadComponent},
  {path: 'many-spread', component: ManySpreadViewComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
