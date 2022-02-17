import {Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{

   @Input() isLoginTrue=false;

    loginHandler() {
        //API 
        this.isLoginTrue =  true;
  }
  @Output() afterLoggedIn = new EventEmitter();
  
  logoutHandler () {
     // API
     this.isLoginTrue =  false;
    this.afterLoggedIn.emit(true);
  }

}