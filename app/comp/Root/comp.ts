import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {OnInit} from "angular2/core";
import {Dashboard} from "../Dashboard/comp";
import {Settings} from "../Settings/comp";

@Component({
    template: `
    <div class="container-fluid login-container">
        <div class="container">
            <div class="row">
                <router-outlet></router-outlet>
            </div>
        </div>
   </div> `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: Dashboard, useAsDefault: true},
    {path: '/settings', name: 'Settings', component: Settings}
])

export class Root implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
