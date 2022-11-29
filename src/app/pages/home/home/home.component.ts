import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-hero-parallax></app-hero-parallax>
    <app-who-iam></app-who-iam>
    <app-reviews></app-reviews>
    <app-call-to-action></app-call-to-action>
  `,
})
export class HomeComponent {}
