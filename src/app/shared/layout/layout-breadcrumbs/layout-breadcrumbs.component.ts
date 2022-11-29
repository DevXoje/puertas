import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-breadcrumbs',
  template: ` <app-layout>
    <app-breadcrumbs></app-breadcrumbs>
    <ng-content></ng-content>
  </app-layout>`,
})
export class LayoutBreadcrumbsComponent {}
