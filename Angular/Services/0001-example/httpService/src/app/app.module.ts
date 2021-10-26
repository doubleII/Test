import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// http
import { HttpClientModule } from '@angular/common/http';
// project
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// primeng
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { MyTableComponent } from './components/my-table/my-table.component';
// two way binding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
