import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { TemplatePageTitleStrategy } from '@shared/template-page-title-strategy.service';

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
        private titleSetter: TemplatePageTitleStrategy,
        private ccService: NgcCookieConsentService //private cookie: CookieService
    ) {}
}
