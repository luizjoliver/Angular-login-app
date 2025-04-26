import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output('submit') onSubmit = new EventEmitter()
  @Output('navigate') onNavigate = new EventEmitter()

  submit(){
    this.onSubmit.emit()
  }
  navigate(){
    this.onNavigate.emit()
  }
}
