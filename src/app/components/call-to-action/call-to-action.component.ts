import { Component } from '@angular/core';

@Component({
	selector: 'app-call-to-action',
	templateUrl: './call-to-action.component.html',
})
export class CallToActionComponent {
	content = [
		`Puedes solicitarnos presupuesto a través de este número de teléfono
			que te facilitamos.`,
		`Preferimos el contacto mediante llamada telefónica debido a que no
			siempre estamos pendientes del correo electrónico.`,
		`Siempre tenemos nuestro móvil a mano. Si no te atendemos en el
			momento es que estamos trabajando duro, no te preocupes, te llamamos
			nosotros en la mayor brevedad posible.`,
	];
}
