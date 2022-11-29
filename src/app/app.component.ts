import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--  <app-loader></app-loader> -->
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>

    <!--<app-cookie-consent></app-cookie-consent>-->
  `,
})
export class AppComponent {
  title = 'puertas';
}
