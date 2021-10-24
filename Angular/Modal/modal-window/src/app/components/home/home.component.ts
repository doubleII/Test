import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalWindowService } from 'src/app/shared/services/modal-window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private service: ModalWindowService) { }
  @ViewChild('firstModalWindow', {read: ViewContainerRef}) entry!: ViewContainerRef
  sub!: Subscription;

  ngOnInit() {
  }

  openFirstModalWindow() {
    this.sub = this.service
    .openFirstModalWindow(this.entry, 'This is a new Title', 'This is a body text.', 'Save')
    .subscribe((x)=>{
      // logic do something 
      console.log(`lessons loaded ${x}`);
      // complete();
    });
  }
  ngOnDestroy(): void {
    console.log('home ngOnDestroy called...');
    if (this.sub) {
      this.sub.unsubscribe();
    }}
}
