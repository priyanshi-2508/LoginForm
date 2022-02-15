
import {Component,Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector : 'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{
   
    userName='';
    isUserNameValid = true;
     isUserNameShown = false;

    password='';
    isPasswordValid= true;
    isPasswordFieldShown = true;
    @Output() eve = new EventEmitter();

    receivedValue(value : any){
        this.userName = value;
    }

    isFieldUserNameValid(){
        console.log(this.userName);
        this.isUserNameValid = this.userName.length > 0;
        if(this.isUserNameValid==false){
            this.isUserNameShown = true;
        }
        return this.isUserNameValid;
    }

    isFieldPasswordValid(){
        this.isPasswordValid = this.password.length > 0;
        return this.isPasswordValid;
    }


    onLoginClick(){
        this.eve.emit(true);

        if(this.isFieldUserNameValid() && this.isFieldPasswordValid() ){
            //login
            // console.log("Logged in Successfully!!");
        } else{
            return false;
        }
        return true;
    }


}