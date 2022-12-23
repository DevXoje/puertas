import {Component} from '@angular/core';
import {Image} from '@core/models/image';
import {Link} from '@core/models/Link';
import {BRAND_LOGO} from '@core/models/static';

@Component({
	selector: 'app-footer-main',
	template: `
        <mat-grid-list cols="2" rowHeight="550px" class="footer_main">
            <mat-grid-tile class="logo_side">
                <aside>
                    <ul>
                        <li *ngFor="let item of linksLegal">
                            <a [routerLink]="[item.path]">{{ item.text }}</a>
                        </li>
                    </ul>
                </aside>
                <aside>
                    <figure class="footer_main__logo">
                        <img
                                [alt]="logo.alt"
                                [height]="logo.height"
                                [ngSrc]="logo.path"
                                [width]="logo.width"
                                priority/>
                    </figure>
                </aside>
            </mat-grid-tile>
            <mat-grid-tile>
                <aside>
                    <h2 class="footer_main__title">puertas carlos haro aparicio</h2>
                    <ul>
                        <li *ngFor="let item of linksSiteMap">
                            <ng-container *ngIf="item.children">
                                <ul>
                                    <li *ngFor="let subItem of item.children">
                                        <a [routerLink]="[subItem.path]">{{ subItem.text }}</a>
                                    </li>
                                </ul>
                            </ng-container>
                            <a [routerLink]="[item.path]">{{ item.text }}</a>
                        </li>
                    </ul>
                </aside>
            </mat-grid-tile>
        </mat-grid-list>
	`,
	styles: [
		`
          .footer_main {
            padding-top: 50px;
            text-transform: capitalize;
            background-color: #424242;

            &__logo {

              img {

              }
            }

            &__title {
              color: #fff;
              text-transform: uppercase;
            }

            li {
              margin-bottom: 15px;
            }

            a {
              color: #777777;
            }
          }
		`,
	],
})
export class FooterMainComponent {
	linksLegal: Link[] = [
		{
			path: '',
			text: 'avisos legales',
		},
		{
			path: '',
			text: 'politica de privacidad',
		},
		{
			path: '',
			text: 'politica de cookies',
		},
	];
	logo: Image = {
		path: BRAND_LOGO.path,
		alt: BRAND_LOGO.alt,
		width: 274,
		height: 314,
	};

	linksSiteMap: Link[] = [
		{
			path: '',
			text: 'inicio',
		},
		{
			path: '',
			text: 'nuestro catalogo',
			children: [
				{path: '', text: 'puertas de entrada y exterior'},
				{path: '', text: 'puertas de interior'},
				{path: '', text: 'armarios y vestidores'},
				{path: '', text: 'trabajos especiales'},
			],
		},
		{
			path: '',
			text: 'empresa',
		},
		{
			path: '',
			text: 'contacto',
		},
	];
}
