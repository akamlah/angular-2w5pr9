import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  // == these come from outside
  @Input() text: string;
  @Input() color: string;

  @Output() btnClick = new EventEmitter();

  constructor() {
    this.text = ""
    this.color = "blue"
  }

  onClick() {
    // to reuse this component, we don't want the implementation to be here, but an EVENT EMITTER. we will emit "btnClick" event, which is declared in vars
    this.btnClick.emit();
  }
}
