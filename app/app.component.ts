import {Component} from 'angular2/core';
import {Login} from './comp/login/login.comp';
import {Root} from './comp/root/root.comp';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>',
    selector: 'dash'
})

@RouteConfig([
    {path: '/', name: 'Login', component: Login},
    {path: '/root/...', name: 'Root', component: Root}
])

export class AppComponent {
}
