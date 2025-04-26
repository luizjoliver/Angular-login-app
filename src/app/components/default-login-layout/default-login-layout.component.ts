import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) primaryBtnText: string = '';
  @Input({ required: true }) secondaryBtnText: string = '';
}
