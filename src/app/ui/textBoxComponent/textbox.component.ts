import {Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector : 'app-textbox',
    templateUrl:'./textbox.component.html',
    styleUrls:['./textbox.component.css']
})
export class TextBoxComponent{
  @Input() nameOfBox : any;

  @Output() InputValue = new EventEmitter();

   getValue(){
      this.InputValue.emit(this.nameOfBox);
  }

}