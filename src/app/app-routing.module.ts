import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesCounterComponent } from './series-counter/series-counter.component';

const routes: Routes = [
  {
    path: 'series-counter', component: SeriesCounterComponent
  },
  {
    path: '**', redirectTo: 'series-counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
