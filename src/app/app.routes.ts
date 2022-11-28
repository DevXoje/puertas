import { Route } from '@angular/router';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './containers/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy.component';

const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'terms',
    component: PrivacyPolicyComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

export const APP_ROUTES = appRoutes;
//export const APP_ROUTES = RouterModule.forRoot(appRoutes);
