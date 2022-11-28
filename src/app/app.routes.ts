import { Route } from '@angular/router';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './containers/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Route[] = [
	{
		path: '',
		component: HomeComponent,
	},
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
		path: '**',
		component: ErrorComponent,
	},
];

export const APP_ROUTES = appRoutes;
//export const APP_ROUTES = RouterModule.forRoot(appRoutes);
