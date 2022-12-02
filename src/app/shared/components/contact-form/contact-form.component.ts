import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Input } from '../../../core/models/input';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  addressForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    telephone: [null, Validators.required],
    subject: [null, Validators.required],
    message: null,
    acceptance_279: [null, Validators.required],
    acceptance_414: [null, Validators.required],
    acceptance_415: [null, Validators.required],
  });

  inputs: Input[] = [
    {
      label: 'Tu nombre',
      type: 'text',
      name: 'name',
      placeholder: 'algo',
    },
    {
      label: 'Tu correo electrónico',
      type: 'email',
      name: 'email',
      placeholder: 'algo',
    },
    {
      label: 'Tu teléfono',
      type: 'tel',
      name: 'telephone',
      placeholder: 'algo',
    },
    {
      label: 'Asunto',
      type: 'text',
      name: 'subject',
      placeholder: 'algo',
    },
    {
      label: 'Tu mensaje (opcional)',
      type: 'textarea',
      name: 'message',
      placeholder: 'algo',
    },
    {
      label: `He leído y acepto el
			<a
				target="_blank"
				rel="nofollow noopener noreferrer"
				href="https://puertasch.com/avisos-legales"
				>Aviso Legal</a
			>
			y la
			<a
				target="_blank"
				rel="nofollow noopener noreferrer"
				href="https://puertasch.com/politica-de-privacidad"
				>Política de Privacidad</a
			>.`,
      type: 'checkbox',
      name: 'acceptance_279',
      placeholder: 'algo',
    },
    {
      label:
        'Declaro, bajo mi propia responsabilidad, ser mayor de 18 años y respondo de manera exclusiva de la veracidad de dicha declaración.',
      type: 'checkbox',
      name: 'acceptance_414',
      placeholder: 'algo',
    },
    {
      label:
        'Acepto recibir la información que la entidad considere oportuno enviarme por correo electrónico o medio de comunicación electrónica equivalente. (Es posible darse de baja en cualquier momento).',
      type: 'checkbox',
      name: 'acceptance_415',
      placeholder: 'algo',
    },
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
