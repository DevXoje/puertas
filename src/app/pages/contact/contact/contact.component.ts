import { Component } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  template: `
    <img src="" alt="algo" />
    <div>
      <h2><strong>Contacto con Puertas Carlos Haro</strong></h2>
      <a href=""
        >ver ubicación
        <fa-icon [icon]="arrowTop"></fa-icon>
      </a>
    </div>
    <app-hero></app-hero>
    <app-call-to-contact></app-call-to-contact>
    <app-doubts-form></app-doubts-form>
    <app-where-we-are></app-where-we-are>
    <app-our-social-media [title]="socialMediaTitle"></app-our-social-media>
  `,
})
export class ContactComponent {
  arrowTop = faArrowAltCircleUp;

  socialMediaTitle = 'Puedes contactarnos a través de nuestras Redes Sociales';
}
