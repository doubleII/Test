import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// project
import { HomeComponent } from './components/home/home.component';
import { MyTableComponent } from './components/my-table/my-table.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'table', component: MyTableComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [MyTableComponent]
})
export class AppRoutingModule { }
