"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../../../../environments/environment");
var LoginComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function LoginComponent(formBuilder, route, router, authenticationService, authFackservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
        this.submitted = false;
        this.error = '';
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.body.removeAttribute('data-layout');
        document.body.classList.add('auth-body-bg');
        this.loginForm = this.formBuilder.group({
            email: ['admin@themesdesign.in', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['123456', [forms_1.Validators.required]]
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        // tslint:disable-next-line: no-string-literal
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    /**
     * Form submit
     */
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (environment_1.environment.defaultauth === 'firebase') {
                this.authenticationService.login(this.f.email.value, this.f.password.value).then(function (res) {
                    _this.router.navigate(['/']);
                })["catch"](function (error) {
                    _this.error = error ? error : '';
                });
            }
            else {
                this.authFackservice.login(this.f.email.value, this.f.password.value)
                    .pipe(operators_1.first())
                    .subscribe(function (data) {
                    _this.router.navigate(['/']);
                }, function (error) {
                    _this.error = error ? error : '';
                });
            }
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
