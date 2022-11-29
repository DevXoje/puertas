import { Route } from '@angular/router';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy.component';
import { EmpresaComponent } from './pages/our-info/our-info/empresa.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  /*	{
		path: '',
		component: HomeComponent,
	},*/
  {
    path: 'empresa',
    component: EmpresaComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'terms',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

export const APP_ROUTES = appRoutes;
//export const APP_ROUTES = RouterModule.forRoot(appRoutes);
