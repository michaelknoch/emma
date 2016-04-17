import { Component, OnInit } from 'angular2/core';

@Component({
    template: `
    <div class="container-fluid login-container">
        <div class="container">
            <div class="row">
                <div class="form-wrapper">
                    <img src="dist/assets/logo.png" class="logo">
                     <input type="text" class="form-control" placeholder="Mail" aria-describedby="basic-addon1">
                     <input type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
                     <input type="text" class="form-control" placeholder="Token" aria-describedby="basic-addon1">
                     <button type="button" class="btn btn-default">Get Beautified</button>
                </div>
            </div>
        </div>
   </div> `,

    styleUrls: ['./dist/comp/Login/style.css']

})

export class Login implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
