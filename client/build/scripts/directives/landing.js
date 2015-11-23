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
var Landing = (function () {
    function Landing() {
        console.log('hello this is landing controller');
    }
    Landing = __decorate([
        angular2_1.Component({
            selector: 'landing',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            templateUrl: '/templates/landing.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Landing);
    return Landing;
})();
exports.Landing = Landing;
