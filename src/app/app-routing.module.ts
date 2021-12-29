import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { SeriesCounterComponent } from './series-counter/series-counter.component';

const routes: Routes = [
  {
    path: 'series-counter', component: SeriesCounterComponent
  },
  {
    path: 'log', component: LogComponent
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
