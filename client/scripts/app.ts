// app.ts - file that bootstraps the app

import { Component, View, bootstrap, provide } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';

import { Home } from '/build/scripts/directives/home.js';

@Component({
    selector: 'app'
})

@RouteConfig([
    new Route({ path: '/', component: Home, as: 'Home' })
])

@View({
    templateUrl: './templates/parent.html',
    directives: [Home, ROUTER_DIRECTIVES]
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

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);