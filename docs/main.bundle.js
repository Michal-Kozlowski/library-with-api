webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library_component__ = __webpack_require__("./src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_2__library_library_component__["a" /* LibraryComponent */] },
    { path: 'library/:id', component: __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: '**', redirectTo: 'library', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(data) {
        this.data = data;
        this.title = 'The Library';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_library_component__ = __webpack_require__("./src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_8__auth_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_book_component__["a" /* BookComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__data_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = "fieldset {\r\n  background-color: rgba(0,0,0,0.7);\r\n  max-width: 400px;\r\n  border-radius: 5px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0 0 30px 2px black;\r\n          box-shadow: 0 0 30px 2px black;\r\n}\r\n\r\nlegend {\r\n  font-size: 2em;\r\n  text-align: center;\r\n  text-shadow: 0 0 20px white, 0 0 10px white;\r\n}\r\n\r\ndiv:not(:last-child) {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  font-size: 1.1em;\r\n  color: white;\r\n  width: 90%;\r\n  border-radius: 5px;\r\n}\r\n\r\nlabel {\r\n  text-transform: capitalize;\r\n  display: block;\r\n  margin-bottom: 4px;\r\n  text-shadow: 0 0 5px black;\r\n}\r\n\r\n.material-icons {\r\n  font-size: 2em;\r\n  color: white;\r\n  padding-left: 18px;\r\n  -webkit-transform: translateY(12px);\r\n          transform: translateY(12px);\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  color: black;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n  width: 120px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  font-size: 0.8em;\r\n  color: white;\r\n  max-width: 80%;\r\n  padding-left: 25px;\r\n  margin: 2px auto 0;\r\n}\r\n\r\n.invalid label {\r\n  color: red;\r\n}\r\n\r\n.invalid input {\r\n  border: 2px solid red;\r\n}\r\n\r\n.invalid input {\r\n  -webkit-animation: shake .5s;\r\n          animation: shake .5s;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@media only screen and (min-height: 768px) {\r\n  fieldset {\r\n    margin: 10vh auto 0;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" #form=\"ngForm\" *ngIf=\"data.logged.name === ''\">\n  <fieldset>\n    <legend>Please sign in</legend>\n\n    <div [class.invalid]=\"email.errors && email.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">account_box</i>\n        <input class=\"col s8\" type=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" ngModel>\n      </div>\n        <p *ngIf=\"email.invalid && (email.dirty || email.touched)\">What is your email? (or fake one (but valid))</p>\n    </div>\n\n    <div [class.invalid]=\"password.errors && password.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">lock_outline</i>\n        <input class=\"col s8\" type=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"password\" required minlength=\"6\" ngModel>\n      </div>\n        <p *ngIf=\"password.errors && (password.dirty || password.touched)\">Password is required</p>\n    </div>\n\n    <div class=\"row\">\n      <i class=\"material-icons col s4\">assignment_turned_in</i>\n      <button class=\"waves-effect waves-light blue lighten-1 btn-large\" type=\"submit\" (click)=\"onSubmit(email.value, password.value)\" [disabled]=\"form.invalid\">login</button>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(_router, _route, data) {
        this._router = _router;
        this._route = _route;
        this.data = data;
    }
    SigninComponent.prototype.onSubmit = function (email, password) {
        var _this = this;
        this.data.signin(email, password)
            .subscribe(function (data) {
            _this.data.users.forEach(function (user) {
                if (user.email === email) {
                    _this.data.logged.name = user.name;
                }
            });
            _this.data.logged.email = email;
            _this.data.logged.idToken = data.idToken;
            _this._router.navigate(['/library']);
        }, function (error) {
            _this.data.errorMessage = error;
            alert("Wrong credentials, please try again.");
            _this.data.logged.name = '';
            _this.data.logged.email = '';
            _this.data.logged.idToken = '';
        });
    };
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.checkUsers()
            .subscribe(function (data) {
            for (var key in data) {
                _this.data.users.push(data[key]);
            }
        }, function (error) { return _this.data.errorMessage = error; });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "fieldset {\r\n  background-color: rgba(0,0,0,0.7);\r\n  max-width: 400px;\r\n  border-radius: 5px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0 0 30px 2px black;\r\n          box-shadow: 0 0 30px 2px black;\r\n}\r\n\r\nlegend {\r\n  font-size: 2em;\r\n  text-align: center;\r\n  text-shadow: 0 0 20px white, 0 0 10px white;\r\n}\r\n\r\ndiv:not(:last-child) {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  font-size: 1.1em;\r\n  color: white;\r\n  width: 90%;\r\n  border-radius: 5px;\r\n}\r\n\r\nlabel {\r\n  text-transform: capitalize;\r\n  display: block;\r\n  margin-bottom: 4px;\r\n  text-shadow: 0 0 5px black;\r\n}\r\n\r\n.material-icons {\r\n  font-size: 2em;\r\n  color: white;\r\n  padding-left: 18px;\r\n  -webkit-transform: translateY(12px);\r\n          transform: translateY(12px);\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  color: black;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n  width: 120px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  font-size: 0.8em;\r\n  color: white;\r\n  max-width: 80%;\r\n  padding-left: 25px;\r\n  margin: 2px auto 0;\r\n}\r\n\r\n.invalid label {\r\n  color: red;\r\n}\r\n\r\n.invalid input {\r\n  border: 2px solid red;\r\n}\r\n\r\n.invalid input {\r\n  -webkit-animation: shake .5s;\r\n          animation: shake .5s;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@media only screen and (min-height: 768px) {\r\n  fieldset {\r\n    margin: 10vh auto 0;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" #form=\"ngForm\" *ngIf=\"data.logged.name === ''\">\n  <fieldset>\n    <legend>Please sign up</legend>\n\n    <div [class.invalid]=\"name.errors && name.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">account_box</i>\n        <input class=\"col s8\" type=\"text\" name=\"name\" #name=\"ngModel\" placeholder=\"name\" required ngModel>\n      </div>\n        <p *ngIf=\"name.invalid && (name.dirty || name.touched)\">What is your name?</p>\n    </div>\n\n    <div [class.invalid]=\"email.errors && email.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">account_box</i>\n        <input class=\"col s8\" type=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" ngModel>\n      </div>\n        <p *ngIf=\"email.invalid && (email.dirty || email.touched)\">What is your email? (or fake one (but valid))</p>\n    </div>\n\n    <div [class.invalid]=\"password.errors && password.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">lock_outline</i>\n        <input class=\"col s8\" type=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"password\" required minlength=\"6\" ngModel>\n      </div>\n        <p *ngIf=\"password.errors && (password.dirty || password.touched)\">Please provide a password (minimum 6 characters)</p>\n    </div>\n\n    <div class=\"row\">\n      <i class=\"material-icons col s4\">assignment_turned_in</i>\n      <button class=\"waves-effect waves-light blue lighten-1 btn-large\" type=\"submit\" (click)=\"onSubmit(name.value, email.value, password.value)\" [disabled]=\"form.invalid\">sign up</button>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(_router, _route, data) {
        this._router = _router;
        this._route = _route;
        this.data = data;
    }
    SignupComponent.prototype.onSubmit = function (name, email, password) {
        var _this = this;
        var check = false;
        this.data.users.forEach(function (user) {
            if (user.name === name) {
                check = true;
                alert("Name already in use");
            }
        });
        if (!check) {
            this.data.logged.name = name;
            this.data.signup(email, password)
                .subscribe(function (data) {
                _this.data.logged.email = data.email;
                _this.data.logged.idToken = data.idToken;
                _this.data.createUserName(name, email, data.idToken)
                    .subscribe(function (error) { return _this.data.errorMessage = error; });
                _this._router.navigate(['/library']);
            }, function (error) {
                _this.data.errorMessage = error;
                alert("Email already in use.");
                _this.data.logged.name = '';
                _this.data.logged.email = '';
                _this.data.logged.idToken = '';
            });
        }
        return false;
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.checkUsers()
            .subscribe(function (data) {
            for (var key in data) {
                _this.data.users.push(data[key]);
            }
        }, function (error) { return _this.data.errorMessage = error; });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ".book, .comment {\r\n  background-color: rgba(255,255,255,0.3);\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 5px;\r\n  margin-top: 1%;\r\n  padding: 2% 10%;\r\n}\r\n\r\nh1, p {\r\n  text-align: center;\r\n}\r\n\r\n.title {\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.author {\r\n  font-style: italic;\r\n}\r\n\r\n.description {\r\n  text-align: justify;\r\n}\r\n\r\n.responsive-img {\r\n  max-height: 450px;\r\n  display: block;\r\n  margin: auto;\r\n  -webkit-box-shadow: 8px 8px 12px black;\r\n          box-shadow: 8px 8px 12px black;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\nform {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ni {\r\n  font-size: 1.2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.rate {\r\n  color: gold;\r\n  text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n}\r\n\r\n.noRate {\r\n  color: black;\r\n  text-shadow: none;\r\n}\r\n\r\n.starHover {      \r\n  font-size: 1.4em;\r\n  color: gold;\r\n  margin-top: -3px;\r\n  text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"book\" *ngIf=\"book\">\n  <div class=\"book\">\n    <img [src]=\"book.cover\" [alt]=\"book.name\" class=\"responsive-img\">\n    <p>\n      <span class=\"title\">{{book.name}}</span><br>\n      <span class=\"author\">{{book.author}}</span>\n    </p>\n    <p class=\"description\">{{book.description}}</p>\n    <button class=\"waves-effect waves-light btn\" *ngIf=\"book.borrowedBy === ''\" (click)=\"borrow()\">Borrow</button>\n    <button class=\"waves-effect waves-light btn disabled\" *ngIf=\"book.borrowedBy === data.logged.name && book.borrowedBy !== ''\">Borrowed by You</button>\n    <button class=\"waves-effect waves-light btn disabled\" *ngIf=\"book.borrowedBy !== '' && book.borrowedBy !== data.logged.name\">Borrowed</button>    \n    <a [routerLink]=\"['/library']\" class=\"blue-text text-darken-2\">Back to The Library</a>\n    <div class=\"right\">\n      <!-- in mouseover and mouseleave \"1\" is there to reuse the function from library component (from DataService)-->\n      <i\n        *ngFor=\"let star of data.numberOfStars(5); let index = index\"\n        (mouseover)=\"data.starsHover(index, 1)\"\n        (mouseleave)=\"data.starsLeave(index, 1)\"\n        [class.rate]=\"index < data.rating(book)\"\n        (click)=\"data.starRate(index, book)\"\n        class=\"material-icons\">star\n      </i>\n    </div>\n  </div>\n  <ul>\n    <ng-container *ngFor=\"let comment of comments\">\n      <li class=\"comment\" *ngIf=\"match_id(comment)\">\n        {{comment.text}} - <span class=\"author\">{{comment.author}}</span>\n        <button *ngIf=\"data.logged.name === comment.author\" (click)=\"deleteComment(comment)\" class=\"waves-effect waves-light btn\">delete</button>\n      </li>\n    </ng-container>\n  </ul>\n  <form *ngIf=\"data.logged.name !== ''\">\n    <input type=\"text\" name=\"comment\" [(ngModel)]=\"comment\">\n    <button class=\"waves-effect waves-light btn\" (click)=\"addComment()\">Add comment</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(_route, data) {
        this._route = _route;
        this.data = data;
        this.id = +this._route.snapshot.paramMap.get('id');
        this.comment = '';
        this.bookUrl = 'http://library-json-server-api.herokuapp.com/Books/' + this.id;
        this.commentsUrl = 'http://library-json-server-api.herokuapp.com/Comments';
        this.commentUrl = this.commentsUrl + '?bookID=' + this.id;
    }
    BookComponent.prototype.borrow = function () {
        if (this.data.logged.name === '') {
            alert("You need to log in to borrow books!");
        }
        else {
            this.book.borrowedBy = this.data.logged.name;
            this.data.borrow(this.book, this.data.logged.name);
        }
    };
    BookComponent.prototype.match_id = function (comment) {
        return comment.bookID == this.id;
    };
    BookComponent.prototype.addComment = function () {
        var _this = this;
        this.data.addComment(this.commentsUrl, { "bookID": this.id, "text": this.comment, "author": this.data.logged.name })
            .subscribe(function (comment) {
            _this.comments.push(comment);
        }, function (error) { return _this.data.errorMessage = error; });
        this.comment = "";
    };
    BookComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.comments = this.comments.filter(function (c) { return c !== comment; });
        var urlToDelete = this.commentsUrl + "/" + comment.id;
        this.data.deleteComment(urlToDelete)
            .subscribe(function (error) { return _this.data.errorMessage = error; });
    };
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getBook(this.bookUrl)
            .subscribe(function (book) {
            _this.book = book;
        }, function (error) { return _this.data.errorMessage = error; });
        this.data.getComments(this.commentUrl)
            .subscribe(function (comments) {
            _this.comments = comments;
        }, function (error) { return _this.data.errorMessage = error; });
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_data_service__["a" /* DataService */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    // returns books with M in it
    // http://library-json-server-api.herokuapp.com/Books?name_like=M
    function DataService(_http) {
        this._http = _http;
        this.logged = { name: '', email: '', idToken: '' };
        this.users = [];
    }
    DataService.prototype.rating = function (book) {
        return Math.round(book.rate.sum / book.rate.voters.length);
    };
    DataService.prototype.numberOfStars = function (stars) {
        return Array.from(Array(stars), function (_, x) { return x; });
    };
    DataService.prototype.starsHover = function (index, id) {
        for (var i = 0; i <= index; i++) {
            for (var j = 0; j < 5; j++) {
                document.querySelectorAll("i")[(5 * (id - 1)) + j].classList.add('noRate');
            }
            document.querySelectorAll("i")[(5 * (id - 1)) + index - i].classList.add('starHover');
        }
    };
    DataService.prototype.starsLeave = function (index, id) {
        for (var i = 0; i <= index; i++) {
            for (var j = 0; j < 5; j++) {
                document.querySelectorAll("i")[(5 * (id - 1)) + j].classList.remove('noRate');
            }
            document.querySelectorAll("i")[(5 * (id - 1)) + index - i].classList.remove('starHover');
        }
    };
    DataService.prototype.starRate = function (index, book) {
        var _this = this;
        if (this.logged.name) {
            if (!book.rate.voters.includes(this.logged.name)) {
                var url = 'http://library-json-server-api.herokuapp.com/Books/' + book.id;
                book.rate.sum += index + 1;
                book.rate.voters.push(this.logged.name);
                this.updateBook(url, book)
                    .subscribe(function (book) {
                    book = book;
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                alert("You have already rated this book!");
            }
        }
        else {
            alert("You have to log in to do that!");
        }
    };
    DataService.prototype.borrow = function (book, name) {
        var _this = this;
        var url = 'http://library-json-server-api.herokuapp.com/Books/' + book.id;
        book.borrowedBy = this.logged.name;
        this.updateBook(url, book)
            .subscribe(function (book) {
            book = book;
        }, function (error) { return _this.errorMessage = error; });
    };
    //----api setup--------------------------------------------------
    DataService.prototype.getBooks = function (url) {
        return this._http.get(url)
            .catch(this.handleError);
    };
    DataService.prototype.getBook = function (url) {
        return this._http.get(url)
            .catch(this.handleError);
    };
    DataService.prototype.getComments = function (url) {
        return this._http.get(url)
            .catch(this.handleError);
    };
    DataService.prototype.deleteComment = function (url) {
        return this._http.delete(url)
            .catch(this.handleError);
    };
    DataService.prototype.addComment = function (url, body) {
        return this._http.post(url, body)
            .catch(this.handleError);
    };
    DataService.prototype.updateBook = function (url, body) {
        return this._http.put(url, body)
            .catch(this.handleError);
    };
    //----firebase setup---------------------------------------------
    DataService.prototype.checkUsers = function () {
        return this._http.get("https://library-log.firebaseio.com/users.json")
            ._catch(this.handleError);
    };
    DataService.prototype.createUserName = function (name, email, idToken) {
        var url = "https://library-log.firebaseio.com/users.json?auth=" + idToken;
        return this._http.post(url, { name: name, email: email })
            ._catch(this.handleError);
    };
    DataService.prototype.signup = function (email, password) {
        return this._http.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAW898T5zbIY7YL7LFCiHH5geH4iqWVcTo", { "email": email, "password": password, "returnSecureToken": true })
            ._catch(this.handleError);
    };
    DataService.prototype.signin = function (email, password) {
        return this._http.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAW898T5zbIY7YL7LFCiHH5geH4iqWVcTo", { "email": email, "password": password, "returnSecureToken": true })
            ._catch(this.handleError);
    };
    //-----------------------------------------------------------
    DataService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".brand-logo {\r\n  margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <nav>\n    <div class=\"nav-wrapper blue lighten-2\">\n      <a [routerLink]=\"['/library']\" class=\"brand-logo left\">Library</a>\n      <ul class=\"right\">\n        <li *ngIf=\"!this.data.logged.name\">\n          <a [routerLink]=\"['/signup']\">Sign Up</a>\n        </li>\n        <li *ngIf=\"!this.data.logged.name\">\n          <a [routerLink]=\"['/signin']\">Sign In</a>\n        </li>\n        <li *ngIf=\"this.data.logged.name\">\n          <a [routerLink]=\"['/user']\">{{data.logged.name}}</a>\n        </li>\n        <li *ngIf=\"this.data.logged.name\" (click)=\"onLogout()\">\n          <a [routerLink]=\"['']\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        this.data = data;
    }
    HeaderComponent.prototype.onLogout = function () {
        this.data.logged.name = '';
        this.data.logged.email = '';
        this.data.logged.idToken = '';
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n:-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;;\r\n}\r\ninput {\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;\r\n}\r\nli {\r\n  background-color: rgba(255,255,255,0.3);\r\n  text-align: justify;\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 5px;\r\n  height: 350px;\r\n  overflow-y: hidden;\r\n  padding-bottom: 50px;\r\n}\r\np {\r\n  line-height: 1.5em;\r\n  text-align: center;\r\n  color: #2c3e50;\r\n  margin: 8px 0 -3px;\r\n}\r\n.status {\r\n  text-transform: uppercase;\r\n  border-radius: 2px;\r\n  padding: 1px 6px;\r\n  -webkit-box-shadow: 2px 2px 10px #000;\r\n          box-shadow: 2px 2px 10px #000;\r\n\r\n}\r\n.title {\r\n  font-size: 1.25em;\r\n}\r\n.author {\r\n  font-style: italic;\r\n}\r\n.responsive-img {\r\n  height: 210px;\r\n  display: block;\r\n  margin: auto;\r\n  -webkit-box-shadow: 2px 2px 10px #000;\r\n          box-shadow: 2px 2px 10px #000;\r\n}\r\ni {\r\n  font-size: 1.2em;\r\n  cursor: pointer;\r\n}\r\n.rate {\r\n  color: gold;\r\n  text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n}\r\n.noRate {\r\n  color: black;\r\n  text-shadow: none;\r\n}\r\n.starHover {      \r\n  font-size: 1.4em;\r\n  color: gold;\r\n  margin-top: -3px;\r\n  text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n}"

/***/ }),

/***/ "./src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"library\">\n  <div class=\"row\">\n    <div class=\"input-field col s8 l4 offset-s2 offset-l4\">\n      <form>\n        <input type=\"text\" name=\"search\" placeholder=\"Search (by title or author)\" [(ngModel)]=\"search\">\n      </form>\n    </div>\n  </div>\n  <ul class=\"row\">\n    <ng-container *ngFor=\"let book of books\">\n      <li class=\"col s6 m4 l3\" [hidden]=\"!(matchName(book) || matchAuthor(book))\">\n        <p><i\n          *ngFor=\"let star of data.numberOfStars(5); let index = index\"\n          (mouseover)=\"data.starsHover(index, book.id)\"\n          (mouseleave)=\"data.starsLeave(index, book.id)\"\n          [class.rate]=\"index < data.rating(book)\"\n          (click)=\"data.starRate(index, book)\"\n          class=\"material-icons\">star\n        </i></p>\n        <a [routerLink]=\"['/library', book.id]\">\n          <img [src]=\"book.cover\" [alt]=\"book.name\" class=\"responsive-img\">\n          <p>\n            <span class=\"status green\" *ngIf=\"book.borrowedBy === ''\">available</span>\n            <span class=\"status blue\" *ngIf=\"book.borrowedBy === this.data.logged.name && book.borrowedBy !== ''\">borrowed by you</span>\n            <span class=\"status red\" *ngIf=\"book.borrowedBy !== '' && book.borrowedBy !== this.data.logged.name\">borrowed</span>\n          </p>\n          <p>\n            <span class=\"title\">{{book.name}}</span><br>\n            <span class=\"author\">{{book.author}}</span>\n          </p>\n        </a>\n      </li>\n    </ng-container>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(data) {
        this.data = data;
        this.search = '';
    }
    LibraryComponent.prototype.matchName = function (book) {
        return book.name.toLowerCase().includes(this.search.toLowerCase());
    };
    LibraryComponent.prototype.matchAuthor = function (book) {
        return book.author.toLowerCase().includes(this.search.toLowerCase());
    };
    LibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getBooks('http://library-json-server-api.herokuapp.com/Books')
            .subscribe(function (books) {
            _this.books = books;
        }, function (error) { return _this.data.errorMessage = error; });
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library',
            template: __webpack_require__("./src/app/library/library.component.html"),
            styles: [__webpack_require__("./src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n:-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;;\r\n}\r\ninput {\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;\r\n}\r\nli {\r\n  background-color: rgba(255,255,255,0.3);\r\n  text-align: justify;\r\n  overflow-y: hidden;\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 5px;\r\n  height: 365px;\r\n  padding-bottom: 50px;\r\n}\r\np {\r\n  color: #2c3e50;\r\n  text-align: center;\r\n  margin: 8px 0 -3px;\r\n}\r\n.status {\r\n  text-transform: uppercase;\r\n  border-radius: 2px;\r\n  padding: 1px 6px;\r\n}\r\n.title {\r\n  font-size: 1.25em;\r\n}\r\n.author {\r\n  font-style: italic;\r\n}\r\n.responsive-img {\r\n  height: 210px;\r\n  display: block;\r\n  margin: auto;\r\n  margin-top: 15px;\r\n  -webkit-box-shadow: 2px 2px 10px #000;\r\n          box-shadow: 2px 2px 10px #000;\r\n}\r\nbutton {\r\n  display: block;\r\n  margin: 10px auto 0;\r\n}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"user\">\n  <ul class=\"row\">\n    <h3 class=\"center\">Here you can see all your borrowed books.</h3>\n    <ng-container *ngFor=\"let book of books\">\n      <li class=\"col s6 m4 l3\">\n        <a [routerLink]=\"['/library', book.id]\">\n          <img [src]=\"book.cover\" [alt]=\"book.name\" class=\"responsive-img\">\n        </a> \n        <button class=\"waves-effect waves-light btn\" (click)=\"returnBook(book)\">return</button>\n        <a [routerLink]=\"['/library', book.id]\">          \n          <p>\n            <span class=\"title\">{{book.name}}</span><br>\n            <span class=\"author\">{{book.author}}</span>\n          </p>\n        </a>              \n      </li>\n    </ng-container>    \n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(data) {
        this.data = data;
        this.userUrl = 'http://library-json-server-api.herokuapp.com/Books?borrowedBy=' + this.data.logged.name;
    }
    UserComponent.prototype.returnBook = function (book, event) {
        var _this = this;
        book.borrowedBy = '';
        this.books = this.books.filter(function (b) { return b !== book; });
        var url = 'http://library-json-server-api.herokuapp.com/Books/' + book.id;
        this.data.updateBook(url, book)
            .subscribe(function (book) {
            book = book;
        }, function (error) { return _this.data.errorMessage = error; });
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getBook(this.userUrl)
            .subscribe(function (books) {
            _this.books = books;
        }, function (error) { return _this.data.errorMessage = error; });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = "#welcome {\r\n  text-align: center;\r\n  margin-top: 20%;\r\n}\r\n\r\nh1 {\r\n  font-weight: bold;\r\n  text-shadow: 0 0 10px white, 0 0 25px white, 0 0 50px white;\r\n}\r\n\r\n.blue-text {\r\n  font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"welcome\">\n  <h1>Welcome to The Library</h1>\n  <p>You have found the best place to borrow books from</p>\n  <div class=\"row\" *ngIf=\"!this.data.logged.name\">\n    <a [routerLink]=\"['/signup']\" class=\"blue-text text-darken-2 offset-m3 col m2 s3\">Sign Up</a>\n    <a [routerLink]=\"['/signin']\" class=\"blue-text text-darken-2 col m2 s3\">Sign In</a>\n    <a [routerLink]=\"['/library']\" class=\"blue-text text-darken-2 col l3 m3 s6\">...or just look</a>\n  </div>\n  <div class=\"row\" *ngIf=\"this.data.logged.name\">\n    <a [routerLink]=\"['/library']\" class=\"blue-text text-darken-2 offset-s4 offset-m4\">Check out our books!</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(data) {
        this.data = data;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map