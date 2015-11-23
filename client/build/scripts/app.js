// app.ts - file that bootstraps the app
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var landing_js_1 = require('/build/scripts/directives/landing.js');
var home_js_1 = require('/build/scripts/directives/home.js');
var App = (function () {
    function App(router, location) {
        this.router = router;
        this.location = location;
        this.name = 'SALEH KADDOURA';
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: landing_js_1.Landing, as: 'Landing' }),
            new router_1.Route({ path: '/home', component: home_js_1.Home, as: 'Home' })
        ]),
        angular2_1.View({
            templateUrl: './templates/parent.html',
            directives: [landing_js_1.Landing, home_js_1.Home, router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.Location])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
