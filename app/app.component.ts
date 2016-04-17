import {Component} from 'angular2/core';
import {Login} from './comp/Login/login';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'dash',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Login', component: Login},
    {path: '/location/:id', name: 'Location', component: Location}
])

export class AppComponent {
}