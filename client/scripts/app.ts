// app.ts - file that bootstraps the app

import { Component, View, bootstrap, provide, CORE_DIRECTIVES } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { Landing } from '/build/scripts/directives/landing.js';
import { Home } from '/build/scripts/directives/home.js';

@Component({
    selector: 'app'
})

@RouteConfig([
    new Route({ path: '/', component: Landing, as: 'Landing' }),
    new Route({ path: '/home', component: Home, as: 'Home' })
])

@View({
    templateUrl: './templates/parent.html',
    directives: [Landing, Home, ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

class App {

    router: Router;
    location: Location;
    name: string;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
        this.name = 'SALEH KADDOURA';
    }
}

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);