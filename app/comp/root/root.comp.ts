import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Dashboard} from '../dashboard/comp';
import {Settings} from '../settings/comp';
import {Feed} from "../feed/feed.comp";
import {Offers} from "../offers/offers.comp";
import {Invoices} from "../invoices/invoices.comp";
import {Costumer} from "../costumer/costumer.comp";
declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    templateUrl: 'template.html',
    styleUrls: ['style.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: Dashboard, useAsDefault: true},
    {path: '/costumer', name: 'Costumer', component: Costumer},
    {path: '/offers', name: 'Offers', component: Offers},
    {path: '/invoices', name: 'Invoices', component: Invoices},
    {path: '/feed', name: 'Feed', component: Feed},
    {path: '/settings', name: 'Settings', component: Settings}
])

export class Root implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
