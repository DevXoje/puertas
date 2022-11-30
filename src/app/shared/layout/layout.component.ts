import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<app-navbar>
    <ng-content></ng-content>
    <app-footer></app-footer>
    <app-whatsapp-fixed></app-whatsapp-fixed>
  </app-navbar> `,
})
export class LayoutComponent {}
