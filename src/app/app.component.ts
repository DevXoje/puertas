import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
    selector: 'app-root',
    template: `
        <!--  <app-loader></app-loader> -->
        <app-layout-breadcrumbs>
            <router-outlet></router-outlet>
        </app-layout-breadcrumbs>
    `,
})
export class AppComponent {
    title = 'puertas';

    constructor(
        private ccService: NgcCookieConsentService //private cookie: CookieService
    ) {}
}
