import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'dash',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
/*
@RouteConfig([
    {path: '/', name: 'Locations', component: LocationList},
    {path: '/location/:id', name: 'Location', component: Location}
])*/

export class AppComponent {
}