import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-modal-window',
  templateUrl: './first-modal-window.component.html',
  styleUrls: ['./first-modal-window.component.scss']
})
export class FirstModalWindowComponent implements OnInit, OnDestroy {

  constructor() { }
  // input parameters
  @Input() title: string;
  @Input() buttonName: string;
  @Input() body: string;
  // output parameters
  @Output() closeEvent = new EventEmitter<string>();
  @Output() saveEvent = new EventEmitter<string>();

  ngOnInit() {
    console.log('[first modal window component] init...');
  }

  // open() {
  //   console.log('[first modal window component] open');
  //   // document.getElementById('open-modal').click();
  // }

  save() {
    // now save event parameter not used
    this.saveEvent.emit();
    console.log('[first modal window component] save...');
  }

  close() {
   // now close event parameter not used
   this.closeEvent.emit();
   console.log('[first modal window component] close...');
  }

  ngOnDestroy(): void {
    console.log('[first modal window component] destroyed...');
  }
}
