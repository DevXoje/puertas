import { Component } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-social',
  template: `
    <div class="social-media">
      <h5>Mantente actualizado con nuestras redes</h5>
      <div class="social-media__icons">
        <a
          *ngFor="let item of socialMedias"
          [routerLink]="[item.link]"
          target="_blank">
          <fa-icon [icon]="item.icon"></fa-icon>
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      .social-media {
        background-color: black;
        color: white;
        padding: 50px 0;

        &__icons {
          font-size: 2em;
          display: flex;
          justify-content: space-around;
        }
      }
    `,
  ],
})
export class FooterSocialComponent {
  socialMedias = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/carlos.h.aparicio.3',
      icon: faFacebookF,
    },
    {
      name: 'instagram',
      link: 'https://www.facebook.com/carlos.h.aparicio.3',
      icon: faInstagram,
    },
    {
      name: 'whatsapp',
      link: 'https://www.facebook.com/carlos.h.aparicio.3',
      icon: faWhatsapp,
    },
  ];
}
