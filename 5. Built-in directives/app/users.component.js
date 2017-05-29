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
        this.userArry = [{
                "id": "1",
                "name": "Himanshu",
                "location": "Noida"
            },
            {
                "id": "2",
                "name": "Aman",
                "location": "Hyderabad"
            },
            {
                "id": "3",
                "name": "Shantanu",
                "location": "Delhi"
            }];
    }
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        template: "<h2>Users Component-List Of Users</h2>\n<div *ngIf=\"userArry.length>0\">\n<tr>\n    <th>Name</th>\n    <th>Location</th>\n  </tr>\n  <tr *ngFor=\"let user of userArry\">\n    <td>{{user.name}}   </td>\n    <td>{{user.location}}</td>\n  </tr>\n  <tr>\n  </div>\n"
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map