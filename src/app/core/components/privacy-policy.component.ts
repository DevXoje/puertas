import { Component } from '@angular/core';

@Component({
	selector: 'app-privacy-policy',
	template: ` <div class="section container">
			<h1>Seguridad y privacidad</h1>
			<p>
				Bienvenido a {{ company.name }}. Gracias por visitar nuestra
				página y tomarte tu tiempo en conocer las condiciones que
				regulan nuestra relación contigo. Aquí encontrarás información
				sobre lo que hacemos en {{ company.name }} y sobre cómo
				protegemos tu privacidad.
			</p>
			<p>
				En {{ company.name }} nos dedicamos a la intermediación
				inmobiliaria, en concreto, nos hemos especializado en el
				arrendamiento de inmuebles. Nos encargamos de poner en contacto
				a propietarios que desean alquilar su inmueble con potenciales
				inquilinos, en el proceso analizamos sus gustos, preferencias y
				perfiles de solvencia económica ofreciéndoles nuestro
				asesoramiento para asegurar la operación con terceros a un
				precio competitivo. Igualmente, gestionamos la firma del
				contrato de arrendamiento y del seguro personalizado que
				garantiza la operación.
			</p>
			<p>
				En cualquier caso, si tienes cualquier duda, puedes ponerte en
				contacto con nosotros en
				<a [href]="'mailto:' + company.email" rel="nofollow">{{
					company.email
				}}</a
				>. Estaremos encantados de ayudarte.
			</p>
			<h2>Nuestra política de privacidad. Lo más básico</h2>
			<p>
				En {{ company.name }} nos tomamos muy en serio tu privacidad.
				Aquí te explicamos quiénes somos, cómo recabamos y compartimos
				tu información personal y cómo puedes ejercer tus derechos. Te
				recomendamos que leas en su totalidad esta política de
				privacidad; sin embargo, te hacemos un breve resumen para que
				rápidamente puedas conocer para qué recopilamos tus datos y
				cuáles son tus derechos.
			</p>
			<ul class="list list-divider">
				<li>
					<span class="fw-bold">¿Quiénes somos?</span> Nosotros somos
					{{ company.name }}, S.L. (en lo sucesivo
					<span class="fw-bold">“nosotros”</span> o
					<span class="fw-bold">“{{ company.name }}”</span> y tratamos
					tus datos como responsables de tratamiento. Esto quiere
					decir que debemos asegurarnos de que tratamos tus datos de
					forma legítima y segura.
				</li>
				<li>
					<span class="fw-bold">¿Para qué tratamos tus datos?</span>
					Entre otras finalidades, usaremos tus datos para gestionar
					tu registro como usuario, la contratación de nuestros
					servicios ya sea como propietario, inquilino o profesional,
					atender tus consultas, así como para enviarte comunicaciones
					personalizadas que creemos que pueden ser de tu interés.
					Igualmente, podremos utilizar tus datos una vez hayan sido
					debidamente anonimizados para hacer análisis estadísticos
					por parte de {{ company.name }} o terceros interesados.
				</li>
				<li>
					<span class="fw-bold"
						>¿Con qué legitimación tratamos tus datos?</span
					>
					Estamos legitimados para tratar tus datos por diversos
					motivos. El motivo fundamental es que necesitamos tus datos
					para ejecutar el contrato que aceptas en el momento en que
					te registras en nuestra web
					<a [href]="company.web" target="_blank">{{
						company.web
					}}</a>
					, para formalizar el contrato de arrendamiento y el seguro
					personalizado que te ofrecemos o para contratar nuestros
					servicios si eres un profesional del sector inmobiliario
					<p>
						Si eres un potencial inquilino, debes tener en cuenta
						que necesariamente la prestación de nuestros servicios
						implica que debemos analizar tu perfil personal
						(principalmente económico) con herramientas tecnológicas
						que implican la toma de decisiones automatizadas.
						Nuestro servicio de análisis de riesgos valora el perfil
						digital, financiero y crediticio del potencial inquilino
						constituyendo una unidad que, por su estructura y
						funcionamiento automático, {{ company.name }} no puede
						ofrecer de forma diferenciada del resto de sus
						servicios, no siendo posible que el interesado se oponga
						a dicho tratamiento. Si no deseas que realicemos dicha
						actividad de tratamiento no podrás contratar nuestros
						servicios o, en su caso, deberás darte de baja de
						nuestro registro.
					</p>
					<p>
						Igualmente, consideremos que tenemos un interés legítimo
						en reutilizar la información recabada para efectuar
						análisis estadísticos por parte de {{ company.name }} o
						de terceras empresas interesadas una vez hayamos
						anonimizado dichos datos personales. Del mismo modo,
						consideramos que tenemos un interés legítimo en utilizar
						cookies analíticas para analizar el acceso de usuarios
						registrados y visitantes y su comportamiento de
						navegación en nuestros sitios web
						<a [href]="company.web" target="_blank">{{
							company.web
						}}</a
						>.
					</p>
					<p>
						Por último, necesitaremos tu consentimiento expreso para
						enviarte comunicaciones personalizadas que consideremos
						de tu interés.
					</p>
				</li>
				<li>
					<span class="fw-bold"
						>¿Con quién compartimos tus datos?</span
					>
					Deberemos compartir tus datos con nuestros proveedores
					(principalmente tecnológicos) que nos dan soporte en la
					prestación de nuestros servicios. Salvo obligación legal o
					cuando sea necesario para la ejecución del contrato, no
					compartiremos tus datos con terceros. En este sentido, una
					vez hayamos analizado el perfil del inquilino, ofreceremos a
					las partes un seguro personalizado según sus preferencias y
					necesidades, y previa conformidad de los interesados,
					comunicaremos sus datos personales a la compañía aseguradora
					seleccionada.
				</li>
				<li>
					<span class="fw-bold">Tus derechos.</span> Tienes derecho,
					entre otros, a acceder, rectificar y suprimir tus datos
					personales. En algunos casos, tienes otros derechos como la
					limitación de su tratamiento o a la portabilidad de los
					mismos. Si deseas saber más, puedes consultar aquí
					Información Detallada sobre nuestra política de privacidad o
					ponerte en contacto con nuestro delegado de protección de
					datos en <a [href]="'mailto:' + company.email">email</a>
				</li>
			</ul>
		</div>
		<button class="btn btn-primary" [routerLink]="['/home']">
			Return Home
		</button>`,
})
export class PrivacyPolicyComponent {
	company = {
		name: 'Avalisto',
		address: 'Calle de la Paz, 1, 28001 Madrid',
		phone: '+34 915 515 515',
		email: 'pregunta@avalisto.com',
		web: 'www.avalisto.com',
	};
}
