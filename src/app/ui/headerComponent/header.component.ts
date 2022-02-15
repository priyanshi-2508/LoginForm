import {Component, Input } from '@angular/core';

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
  
  logoutHandler () {
     // API
     this.isLoginTrue =  false;
  }

}