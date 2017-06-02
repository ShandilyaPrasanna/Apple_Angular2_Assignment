"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit Called");
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy Called");
    };
    UsersComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges Called");
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        template: "<h2>USERS COMPONENT</h2>\n\t<h3>Country Of User is {{parentData}}</h3>\n\t<ul>\n<li>Shantanu</li>\n<li>Himanshu</li>\n<li>Rishabh</li>\n<li>Aman</li>\n<li>Ujjwal</li>\n<li>Arpit</li>\n<li>Ankur</li>\n<li>Abhineet</li>\n<li>Siddhant</li>\n<li>Shushant</li>\n</ul>",
        inputs: ['parentData']
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map