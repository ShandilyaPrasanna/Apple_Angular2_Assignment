"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var UsersComponent = (function () {
    function UsersComponent() {
        this.userEvent = new core_2.EventEmitter();
    }
    UsersComponent.prototype.onClick = function (id) {
        this.userEvent.emit(document.getElementById(id).innerHTML);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        template: "<h2>USERS COMPONENT</h2>\n\t<ul>\n<li id=\"1\" (click)=\"onClick(1)\">Shantanu</li>\n<li id=\"2\" (click)=\"onClick(2)\">Himanshu</li>\n<li id=\"3\" (click)=\"onClick(3)\">Rishabh</li>\n<li id=\"4\" (click)=\"onClick(4)\">Aman</li>\n<li id=\"5\" (click)=\"onClick(5)\">Ujjwal</li>\n<li id=\"6\" (click)=\"onClick(6)\">Arpit</li>\n<li id=\"7\" (click)=\"onClick(7)\">Ankur</li>\n<li id=\"8\" (click)=\"onClick(8)\">Abhineet</li>\n<li id=\"9\" (click)=\"onClick(9)\">Siddhant</li>\n<li id=\"0\" (click)=\"onClick(0)\">Shushant</li>\n</ul>",
        outputs: ['userEvent']
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map