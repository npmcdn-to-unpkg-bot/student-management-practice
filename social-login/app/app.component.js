System.register(["angular2/core", 'angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_jwt_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.lock = new Auth0Lock('atLbLHWAQbpHMdEhk02xp8TYYXE43dYo', 'huynhvo.auth0.com');
                    console.debug("Auth0Lock:", Auth0Lock);
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var hash = this.lock.parseHash();
                    this.lock.getProfile(hash.id_token, function (err, profile) {
                        console.log("Err:", err);
                        if (err) {
                            console.log(err);
                            return;
                        }
                        // set user profile to localStorage
                        console.log(profile);
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', hash.id_token);
                        //set response profile for this.userProfile;
                        _this.userProfile = profile;
                    });
                };
                // click login button to get profile
                AppComponent.prototype.login = function () {
                    var _this = this;
                    var hash = this.lock.parseHash();
                    // console.log("this.lock:", this.lock);
                    this.lock.show({
                        connections: ['twitter', 'facebook', 'google-oauth2']
                    });
                    if (hash) {
                        if (hash.error) {
                            console.log('There was an error logging in', hash.error);
                        }
                        else {
                            this.lock.getProfile(hash.id_token, function (err, profile) {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                console.log(profile);
                                localStorage.setItem('profile', JSON.stringify(profile));
                                localStorage.setItem('id_token', hash.id_token);
                                _this.userProfile = profile;
                            });
                        }
                    }
                };
                //remove localStorage
                AppComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.lock.logout({ ref: window.location.href });
                };
                AppComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "\n    <button (click)=\"login()\"> Login to use the website</button>\n    <button *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</button>\n    <ul *ngIf=\"userProfile\">\n      <li>Name: {{userProfile.name}}</li>\n      <li>User ID: {{userProfile.user_id}}</li>\n      <li *ngIf=\"userProfile.gender\">Gender: {{userProfile.gender}}</li>\n      <li>Profile Picture: {{userProfile.picture}}</li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map