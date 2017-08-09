"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = 'Tutorial Heading Updated';
        this.cOne = true;
        this.cTwo = true;
        this.style = 'italic';
        this.size = '30px';
    }
    TutorialsComponent.prototype.toggle = function () {
        this.cOne = !this.cOne;
        this.cTwo = !this.cTwo;
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h4>{{title}}</h4>\n    <p [ngClass]='{classOne:cOne,classTwo:cTwo}'>ngClass activated</p>\n    <button (click)=\"toggle()\">Toggle</button>\n    <p [ngStyle]=\"{'font-style':style,'font-size':size}\">ngStyle paragraph</p>",
            styles: [".classOne{color:white;}\n               .classTwo{background-color:black;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map