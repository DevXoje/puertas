import { Component } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_ICONS } from '@core/models/static';

@Component({
  selector: 'app-footer-social',
  template: `
    <div class="social-media">
      <h5>Mantente actualizado con nuestras redes</h5>
      <div class="social-media__icons">
        <a
          *ngFor="let item of socialMedias"
          [routerLink]="[item.path]"
          target="_blank">
          <fa-icon [icon]="item.content" class="icon"></fa-icon>
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

          & .icon {
            color: white;
          }
        }
      }
    `,
  ],
})
export class FooterSocialComponent {
  socialMedias = SOCIAL_ICONS;
}
