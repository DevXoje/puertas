import { Component } from '@angular/core';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp';
import { Link, LinkList } from '@core/models/Link';
import { CONTACT_DATA } from '@core/models/static';

@Component({
    selector: 'app-footer-site-info',
    template: `
        <div class="footer__site-info">
            <div class="back-to-top__wrapper">
                <a
                    class="back-to-top"
                    href="#page"
                    mat-flat-button
                    title="Volver arriba">
                    <!--<mat-icon
                        aria-label="Side nav toggle icon"
                        class="back-to-top__icon">
                        keyboard_double_arrow_up
                    </mat-icon>-->
                    <fa-icon
                        [icon]="arrowIcon"
                        class="back-to-top__icon"></fa-icon>
                </a>
            </div>
            <p>
                <ng-container *ngFor="let item of legalLinks">
                    <a [routerLink]="[item.path]">{{ item.text }}</a>
                    <ng-container
                        *ngIf="legalLinks[legalLinks.length - 1] !== item"
                        >|</ng-container
                    >
                </ng-container>
                {{ currentYear }} Todos los derechos reservados.
            </p>
            <app-our-logo-footer></app-our-logo-footer>
            <p>
                <!-- <a href="https://intelligentlife.es"
          ><img
              class="alignnone"
              style="width: 50px"
              title="Intelligent Life"
              src="https://puertasch.com/wp-content/uploads/2021/12/TamgrandeIntelligentLife.png"
              alt=""
              width="900"
              height="900"
      /></a> -->

                Copyright © {{ currentYear }} {{ company_name.short }}
            </p>
        </div>
    `,
    styles: [
        `
            .footer__site-info {
                background-color: #515151;
                color: white;

                p {
                    text-align: center;
                }

                a {
                    color: white;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .back-to-top__wrapper {
                .back-to-top {
                    border: 3px solid orange;
                    background-color: #515151;
                    border-top-right-radius: 20px;
                    color: #999999;
                    display: block;
                    height: 50px;
                    width: 50px;

                    line-height: 50px;
                    margin-left: auto;
                    right: 60px;
                    top: -15px;

                    transition: all 0.2s linear 0s;
                    transform: rotate(-45deg);

                    &__icon {
                        border: 3px solid red;
                        animation-duration: 2s;
                        animation-name: flash;
                        transform: rotate(45deg);
                    }
                }
            }
        `,
    ],
})
export class FooterSiteInfoComponent {
    arrowIcon = faAngleDoubleUp;
    currentYear: number = new Date().getFullYear();
    company_name = CONTACT_DATA.name;
    legalLinks: Link[] = [
        {
            text: 'Aviso Legal',
            path: '/aviso-legal',
        },
        {
            text: 'Política de Privacidad',
            path: '/politica-de-privacidad',
        },
        {
            text: 'Política de cookies',
            path: '/politica-de-cookies',
        },
    ];
}
