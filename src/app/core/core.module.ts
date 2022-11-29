import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './components/privacy-policy.component';
import { ErrorComponent } from './components/error.component';
const declarables = [PrivacyPolicyComponent, ErrorComponent];

@NgModule({
  declarations: [...declarables],
  imports: [CommonModule],
  exports: [declarables],
})
export class CoreModule {}
