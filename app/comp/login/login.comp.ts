import { Component, OnInit } from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService} from "../../service/user/user.service";
declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    templateUrl: 'template.html',
    styleUrls: ['login.css']
})

export class Login {

    _userService;

    login: Boolean = true;

    password: String;
    mail: String;
    name: String;
    surname: String;

    constructor(private _router: Router, private _userService: UserService) {
        this._userService = _userService
    }

    userLogin() {
        this._userService.login(this.mail, this.password).subscribe(
            data => this._router.navigate(['Root']),
            err => console.error(err));
    }

    userRegister() {
        this._userService.register(this.mail, this.password, this.name, this.surname).subscribe(
            data => this._router.navigate(['Root']),
            err => console.error(err));
    }

}
