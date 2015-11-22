import { Component, View, bootstrap } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/templates/home.html'
})

export class Home {
    name: string;

    constructor() {
        this.name = "CuttyMusicCollectiveE"
    }
}
