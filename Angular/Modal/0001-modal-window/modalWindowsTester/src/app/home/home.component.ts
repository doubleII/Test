import { ModalWindowService } from './../shared/services/modal-window.service';
import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { isLoweredSymbol } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private firstModalWindowService: ModalWindowService) { }

  @ViewChild('firstModalWindow', {read: ViewContainerRef}) firstModalWindowEntry!: ViewContainerRef;
  firstModalWindowSubscription!: Subscription;

  ngOnInit() {
  }

  openFirstModalWindow() {
    console.log('home open modal window called...');
    this.firstModalWindowSubscription = this.firstModalWindowService
    .openFirstModalWindow(this.firstModalWindowEntry, 'Title - Modal Window', 'This is a body text.', 'Save')
    .subscribe((x) => {
      console.log(`-------> home subscribe: ${x}`);
      console.log(x);
    }); }


  ngOnDestroy(): void {
    console.log('home ngOnDestroy called...');
    if (this.firstModalWindowSubscription) {
      this.firstModalWindowSubscription.unsubscribe();
    }}
}
