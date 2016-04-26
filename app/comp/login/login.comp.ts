import { Component, OnInit } from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService} from "../../service/user/user.service";
import {Modal} from 'angular2-modal';

declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    templateUrl: 'template.html',
    styleUrls: ['login.css'],
    providers: [Modal],
})

export class Login {

    loginState: Boolean = true;

    password: String;
    mail: String;
    name: String;
    surname: String;

    constructor(private modal: Modal, private _router: Router, private _userService: UserService) {

    }

    login() {
        this._userService.login(this.mail, this.password).subscribe(
            data => this._router.navigate(['CompanyList']),
            err => this.err(err));

    }

    logout() {
        this._userService.logout().subscribe(data => {
            console.info('logout');
        });
    }

    register() {
        this._userService.register(this.mail, this.password, this.name, this.surname).subscribe(
            data => this._router.navigate(['CompanyList']),
            err => this.err(err));
    }

    err(msg) {
        console.error(msg);
        this.modal.alert()
            .title('Hoppla').body(msg.status + ':' + msg._body).open();
    }

}
