import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-navbar>
      <mat-card [style.width]="'85%'" [style.margin]="'0 auto'">
        <mat-card-content>
          <ng-content></ng-content>
        </mat-card-content>
      </mat-card>

      <app-footer></app-footer>
      <app-whatsapp-fixed></app-whatsapp-fixed>
    </app-navbar>
  `,
})
export class LayoutComponent {}
