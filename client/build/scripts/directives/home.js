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
var Home = (function () {
    function Home(http) {
        this.name = "This is the home page";
        this.token = localStorage.getItem('fbToken');
        this.http = http;
        this.getGroupPosts();
    }
    Home.prototype.getGroupPosts = function () {
        var _this = this;
        this.result = {};
        this.http.get('https://graph.facebook.com/v2.5/227262903994931/feed?access_token=' + this.token).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.result = data; }, function (error) { return _this.error = error; }, function () { return console.log('posts done', _this.result); });
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'home',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            templateUrl: '/templates/home.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Home);
    return Home;
})();
exports.Home = Home;
