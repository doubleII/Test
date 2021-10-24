import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstModalWindowComponent } from './components/first-modal-window/first-modal-window.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [FirstModalWindowComponent]
})
export class AppRoutingModule { }
