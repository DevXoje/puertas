import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './components/privacy-policy.component';
import { ErrorComponent } from './components/error.component';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { COOKIECONFIG } from '@shared/cookieConfig';

const declarables = [PrivacyPolicyComponent, ErrorComponent];

@NgModule({
    declarations: [...declarables],
    imports: [CommonModule, NgcCookieConsentModule.forRoot(COOKIECONFIG)],
    exports: [declarables, NgcCookieConsentModule],
})
export class CoreModule {}
