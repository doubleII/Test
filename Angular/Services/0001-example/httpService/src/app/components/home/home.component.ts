import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// project
import { MyTableComponent } from '../my-table/my-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked { 

  constructor() { }
  
  @ViewChild(MyTableComponent) table!: MyTableComponent;

  ngOnInit(): void {
    console.log('ngOnInit...');
    // const factory = this.resolver.resolveComponentFactory(MyTableComponent);
    // this.entry.createComponent(factory);
  }
  ngAfterViewInit(): void {
     console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('view checked');
  }
}
