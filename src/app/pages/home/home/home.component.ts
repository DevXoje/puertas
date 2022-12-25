import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <app-hero-parallax></app-hero-parallax>
        <app-who-iam></app-who-iam>
        <app-reviews></app-reviews>
        <app-call-to-action></app-call-to-action>
    `,
    styles: [
        `
            /* app-hero-parallax {
        position: absolute;
        width: 95vw;
        height: 100px;
        top: -65px;
        left: -10%;
      }
      app-who-iam {
        margin-top: 100px;
      }*/
        `,
    ],
})
export class HomeComponent {}
