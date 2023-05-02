import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: "hbo-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public buttonClicked:string = "";
    private responce!:Observable<AuthResponse>;

    constructor(private authService:AuthService, private router:Router) {
    }


    public onSubmit(form: NgForm) {
        console.log("Button Clicked = " + this.buttonClicked);
        console.log(form.value);

        const email = form.value.email;
        const password = form.value.password


        if(this.buttonClicked == 'SignUp') {
       this.responce = this.authService.signup(email, password);
        }
        if(this.buttonClicked == 'Login') {
            this.responce = this.authService.login(email, password);
        }
        
        
        this.responce.subscribe(
            (data:AuthResponse) => {
            console.log(data); 
            this.router.navigate([''])
            },
            error => {
                console.log(error.error.error); 

            }
         );

         form.resetForm();
    }

}