
import {Component,Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector : 'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{

    @Input() whetherUserLoggedIn=false;

    usernameField={
        name:'username',
        type:'text',
        value:'',
        placeholder:'Enter Username',
        validationMsg : 'Username is required',
        // autofocus:'on',
        isFieldValid:true,
        isValid: function(){
            if(this.value.trim().length< 1){
                    this.validationMsg = 'Username can not be empty';
                    this.isFieldValid = false;
               return false;    
            }
            this.isFieldValid = true;
            return true;
        },
        ifLoggedIn: function(){
            this.value='';
        }
    }

    passwordField={
        name:'password',
        type:'password',
        value:'',
        placeholder:'Enter Password',
        validationMsg : 'Password is required',
        isFieldValid:true,
        // autofocus:'off',
        isValid: function(){
            if(this.value.trim().length < 1){
                    this.validationMsg = 'Password can not be empty';
                    this.isFieldValid = false;
               return false;    
            } else if(this.value.trim().length>8){
                this.validationMsg = 'Password should be less than or equal to 8 letters';
                this.isFieldValid = false;
                return false;
            }
            this.isFieldValid = true;
            return true;
        },
        ifLoggedIn: function(){
            this.value='';
        }

    }
   


    // userName='';
    // isUserNameValid = true;
    // isUserNameShown = false;

    // password='';
    // isPasswordValid= true;
    // isPasswordFieldShown = true;
    @Output() eve = new EventEmitter();

    receivedValue(value : any){
        // this.userName = value;
    }

    // isFieldUserNameValid(){
    //     console.log(this.userName);
    //     this.isUserNameValid = this.userName.length > 0;
    //     if(this.isUserNameValid==false){
    //         this.isUserNameShown = true;
    //     }
    //     return this.isUserNameValid;
    // }

    // isFieldPasswordValid(){
    //     this.isPasswordValid = this.password.length > 0;
    //     return this.isPasswordValid;
    // }


    onLoginClick(){
        this.eve.emit(true);

        // if(this.isFieldUserNameValid() && this.isFieldPasswordValid() ){
        //     //login
        //     // console.log("Logged in Successfully!!");
        // } else{
        //     return false;
        // }
        return true;
    }


}