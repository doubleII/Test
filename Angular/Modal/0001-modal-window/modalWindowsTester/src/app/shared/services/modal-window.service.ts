import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FirstModalWindowComponent } from 'src/app/components/first-modal-window/first-modal-window.component';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  private componentRef!: ComponentRef<FirstModalWindowComponent>;
  private subscriber!: Subject<string>;
  constructor(private resolver: ComponentFactoryResolver) { }

  openFirstModalWindow( entry: ViewContainerRef, title: string, body: string, buttonName: string) {
    console.log('SERVICE OPEN MODAL WINDOW');
    const factory = this.resolver.resolveComponentFactory(FirstModalWindowComponent);
    console.log('1 factory');
    this.componentRef = entry.createComponent(factory);
    console.log('2 create component');
    // this.firstModalWindowComponentRef.instance.open();
    //console.log('3');
    this.componentRef.instance.title = title;
    console.log(`3 get title - ${title} | get body - ${body}`);
    this.componentRef.instance.body = body;
    this.componentRef.instance.buttonName = buttonName;
    console.log(`4 get button name - ${buttonName}`);
    this.componentRef.instance.saveEvent.subscribe(() => this.saveFirsModalWindow());
    console.log(`5 subscribe save event`);
    this.componentRef.instance.closeEvent.subscribe(() => this.closeFirsModalWindow());
    console.log(`6 subscribe close event`);
    this.subscriber = new Subject<string>();
    console.log(`7 new subject`);
    return this.subscriber.asObservable();
  }

  closeFirsModalWindow() {
    console.log('SERVICE CLOSE MODAL WINDOW');
    this.subscriber.complete();
    this.componentRef.destroy();
  }

  saveFirsModalWindow() {
    console.log('SERVICE SAVE MODAL WINDOW');
    this.subscriber.next('[service say]: entry saved');
    this.closeFirsModalWindow();
  }
}
