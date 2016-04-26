import {Component} from 'angular2/core';
import {Login} from './comp/login/login.comp';
import {Root} from './comp/root/root.comp';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CompanyList} from "./comp/companyList/companyList.comp";
import {NewCompany} from "./comp/newCompany/newCompany.comp";

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>',
    selector: 'dash'
})

@RouteConfig([
    {path: '/', name: 'Login', component: Login},
    {path: '/companyList', name: 'CompanyList', component: CompanyList},
    {path: '/new-company', name: 'NewCompany', component: NewCompany},
    {path: '/root/...', name: 'Root', component: Root}
])

export class AppComponent {
}
