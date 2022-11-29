import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <!--<app-breadcumbs></app-breadcumbs>-->
    <app-call-to-contact></app-call-to-contact>
    <app-doubts-form></app-doubts-form>
    <app-where-we-are></app-where-we-are>
    <!--<app-our-social-media [title]="socialMediaTitle"></app-our-social-media>-->
  `,
})
export class ContactComponent {
  socialMediaTitle = 'Puedes contactarnos a través de nuestras Redes Sociales';
}
