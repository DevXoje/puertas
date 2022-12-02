import { Component } from '@angular/core';

@Component({
  selector: 'app-who-iam',
  template: `
    <app-who-iam-description></app-who-iam-description>
    <app-who-iam-services></app-who-iam-services>
  `,
  styles: [
    `
      app-who-iam-description {
        text-align: center;
        margin: 0px 50px;
      }
    `,
  ],
})
export class WhoIAmComponent {}
