import { Component, View, bootstrap, CORE_DIRECTIVES } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Http, Response, HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: '/templates/home.html'
})

export class Home {
    name: string;
    posts: Object;
    result: Object;
    error: Object;
    http: Http;
    token: string;

    constructor(http: Http) {
        this.name = "This is the home page";
        this.token = localStorage.getItem('fbToken');
        this.http = http;
        this.getGroupPosts();
    }

    getGroupPosts() {
        this.result = {};
        this.http.get('https://graph.facebook.com/v2.5/227262903994931/feed?access_token=' + this.token).map(res => res.json()).subscribe(
            data =>  this.result = data,
            error => this.error = error,
            () => console.log('posts done', this.result) );
    }
}