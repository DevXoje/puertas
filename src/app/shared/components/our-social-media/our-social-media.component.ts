import { Component, Input } from '@angular/core';
import {
    faFacebook,
    faInstagram,
    faTelegram,
    faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_ICONS, TEST } from '@core/models/static';
@Component({
    selector: 'app-our-social-media',
    template: `
        <h2 [innerHTML]="title"></h2>
        <ul class="social-media__icons">
            <li *ngFor="let item of icons">
                <a
                    *ngIf="hasIconsLarge; else elseBlock"
                    [routerLink]="[item.path]"
                    [style.background-color]="item.color"
                    [style.width]="'6em'"
                    extended
                    mat-fab>
                    <fa-icon
                        [icon]="item.content"
                        [style.background-color]="item.color"
                        [style.color]="'white'"></fa-icon>
                </a>
                <ng-template #elseBlock>
                    <a
                        [routerLink]="[item.path]"
                        [style.background-color]="item.color"
                        mat-fab>
                        <fa-icon
                            [icon]="item.content"
                            [style.background-color]="item.color"
                            [style.color]="'white'"></fa-icon> </a
                ></ng-template>
            </li>
        </ul>
    `,
    styles: [
        `
            .social-media__icons {
                display: flex;
                margin: 1.5em auto;
                justify-content: center;
                align-content: center;
                li {
                    margin-left: 2.5em;
                    margin-bottom: 6px;
                    & fa-icon {
                        font-size: 1.6em;
                    }
                }
            }
        `,
    ],
})
export class OurSocialMediaComponent {
    icons = SOCIAL_ICONS;
    @Input() title = 'Redes sociales';
    @Input() hasIconsLarge = false;
}
