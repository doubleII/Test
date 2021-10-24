import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-modal-window',
  templateUrl: './first-modal-window.component.html',
  styleUrls: ['./first-modal-window.component.scss']
})
export class FirstModalWindowComponent implements OnInit, OnDestroy {

  constructor() { }
  // Input parameters
  @Input() title: string;
  @Input() body: string;
  @Input() buttonName: string;
  // output parameters
  @Output() closeEvent = new EventEmitter<string>();
  @Output() saveEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  save() : void {
    this.saveEvent.emit();
  }

  close() : void {
    this.closeEvent.emit();
  }

  ngOnDestroy() : void {
    console.log('[first modal window component] destroyed...')
  }
}
