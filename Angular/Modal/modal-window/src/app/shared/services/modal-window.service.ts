import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FirstModalWindowComponent } from 'src/app/components/first-modal-window/first-modal-window.component';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  private componentRef: ComponentRef<FirstModalWindowComponent>;
  private subscriber: Subject<string>;
  constructor( private resolver: ComponentFactoryResolver) { }

  openFirstModalWindow( entry: ViewContainerRef, title: string, body: string, buttonName: string) {
    console.log('SERViCE OPEN MODAL WINDOW');
    const factory = this.resolver.resolveComponentFactory(FirstModalWindowComponent);
    this.componentRef = entry.createComponent(factory);
    this.componentRef.instance.title = title;
    this.componentRef.instance.body = body;
    this.componentRef.instance.buttonName = buttonName;
    this.componentRef.instance.saveEvent.subscribe(() => this.saveFirstModalWindow());
    this.componentRef.instance.closeEvent.subscribe(() => this.closeFirstModalWindow());
    this.subscriber = new Subject<string>();
    return this.subscriber.asObservable();
  }

  closeFirstModalWindow() : void {
    this.subscriber.complete();
    this.componentRef.destroy();
  }

  saveFirstModalWindow() : void {
    this.subscriber.next();
    // this.closeFirstModalWindow();
  }
}
