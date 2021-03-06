/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import {AppComponent} from './app.component';
import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';

import {HTTP_PROVIDERS} from 'angular2/http';
import {CostumerService} from './service/costumer/costumer.service';
import {UserService} from "./service/user/user.service";
import {ModalConfig} from 'angular2-modal';
import {CompanyService} from "./service/company/company.service";
import {DataService} from "./service/data.service";


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(ModalConfig, {useValue: new ModalConfig('lg', true, 81)}),
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    CostumerService,
    UserService,
    CompanyService,
    DataService
]);
