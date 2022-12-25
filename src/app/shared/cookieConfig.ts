import { NgcCookieConsentConfig } from 'ngx-cookieconsent';

export const COOKIECONFIG: NgcCookieConsentConfig = {
    cookie: {
        domain: 'localhost', // it is recommended to set your domain, for cookies to work properly
    },
    palette: {
        popup: {
            background: '#000',
        },
        button: {
            background: '#f1d600',
        },
    },
    theme: 'edgeless',
    type: 'opt-out',
    layout: 'my-custom-layout',
    layouts: {
        'my-custom-layout': '{{messagelink}}{{compliance}}',
    },
    elements: {
        messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="http://localhost:4200/{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>,
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link"  href="http://localhost:4200/{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> and our
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link"  href="http://localhost:4200/{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
    },
    content: {
        message:
            'By using our site, you acknowledge that you have read and understand our ',

        cookiePolicyLink: 'Cookie Policy',
        cookiePolicyHref: 'terms',

        privacyPolicyLink: 'Privacy Policy',
        privacyPolicyHref: 'terms',

        tosLink: 'Terms of Service',
        tosHref: 'terms',
    },
};
