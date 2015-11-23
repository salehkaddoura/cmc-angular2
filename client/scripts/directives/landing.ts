import { Component, View, bootstrap, CORE_DIRECTIVES } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: 'landing',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: '/templates/landing.html'
})

export class Landing {
    constructor() {
        console.log('hello this is landing controller');
    }
}

 