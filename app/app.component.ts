import {Component} from 'angular2/core';
import {Login} from './comp/Login/comp';
import {Root} from './comp/Root/comp';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'dash',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Login', component: Login},
    {path: '/root/...', name: 'Root', component: Root}
])

export class AppComponent {
}
