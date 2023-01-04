import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
    selector: 'app-root',
    template: `
        <!--  <app-loader></app-loader> -->
        <app-layout>
            <router-outlet></router-outlet>
        </app-layout>
    `,
})
export class AppComponent {
    constructor(
        private ccService: NgcCookieConsentService //private cookie: CookieService
    ) {}
}
