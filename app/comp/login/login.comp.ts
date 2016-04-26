import { Component, OnInit } from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService} from "../../service/user/user.service";
declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    templateUrl: 'template.html',
    styleUrls: ['login.css']
})

export class Login implements OnInit {

    _userService;

    password: String;
    mail: String;
    name: String;
    surname: String;

    constructor(private _router: Router, private _userService: UserService) {
        this._userService = _userService
    }

    ngOnInit() {

    }

    login() {
        this._userService.login(this.mail, this.password).subscribe(() => {
            this._router.navigate(['CompanyList']);
        });
    }

    register() {
        this._userService.register(this.mail, this.password, this.name, this.surname).subscribe(() => {
            this._router.navigate(['CompanyList']);
        });
    }

}
