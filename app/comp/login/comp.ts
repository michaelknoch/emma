import { Component, OnInit } from 'angular2/core';
import {Router} from 'angular2/router';
declare var __moduleName:any;

@Component({
    moduleId: __moduleName,
    template: `
    <div class="container-fluid login-container">
        <div class="container">
            <div class="row">
                <div class="form-wrapper">
                    <img src="dist/assets/logo.png" class="logo">
                     <input type="text" class="form-control" placeholder="Mail" aria-describedby="basic-addon1">
                     <input type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
                     <input (click)="enableToken()" [ngClass]="{disabeld: !token}" type="text" class="form-control token"
                     placeholder="Register from Token" aria-describedby="basic-addon1">
                     <button (click)="login()" type="button" class="btn btn-default">Get Beautified</button>
                </div>
            </div>
        </div>
   </div> `,
    styleUrls: ['style.css']
})

export class Login implements OnInit {

    token = false;

    constructor(private _router:Router) {

    }

    ngOnInit() {

    }

    login() {
        this._router.navigate(['Root']);
    }

    enableToken() {
        console.log('enable');
        this.token = true;
    }

}
