(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comic-comic-module"],{

/***/ "./src/app/comic/comic-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/comic/comic-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ComicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicRoutingModule", function() { return ComicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/comic-list/comic-list.component */ "./src/app/comic/containers/comic-list/comic-list.component.ts");
/* harmony import */ var _containers_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/comic-detail/comic-detail.component */ "./src/app/comic/containers/comic-detail/comic-detail.component.ts");
/* harmony import */ var _services_comic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/comic.service */ "./src/app/comic/services/comic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _containers_comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_2__["ComicListComponent"],
    }, {
        path: ':id',
        component: _containers_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_3__["ComicDetailComponent"],
    }];
var ComicRoutingModule = /** @class */ (function () {
    function ComicRoutingModule() {
    }
    ComicRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_comic_service__WEBPACK_IMPORTED_MODULE_4__["ComicService"]]
        })
    ], ComicRoutingModule);
    return ComicRoutingModule;
}());



/***/ }),

/***/ "./src/app/comic/comic.module.ts":
/*!***************************************!*\
  !*** ./src/app/comic/comic.module.ts ***!
  \***************************************/
/*! exports provided: ComicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicModule", function() { return ComicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _comic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comic-routing.module */ "./src/app/comic/comic-routing.module.ts");
/* harmony import */ var _containers_comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/comic-list/comic-list.component */ "./src/app/comic/containers/comic-list/comic-list.component.ts");
/* harmony import */ var _containers_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/comic-detail/comic-detail.component */ "./src/app/comic/containers/comic-detail/comic-detail.component.ts");
/* harmony import */ var _components_comics_comics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/comics/comics.component */ "./src/app/comic/components/comics/comics.component.ts");
/* harmony import */ var _components_comic_comic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/comic/comic.component */ "./src/app/comic/components/comic/comic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComicModule = /** @class */ (function () {
    function ComicModule() {
    }
    ComicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _comic_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComicRoutingModule"]
            ],
            declarations: [_containers_comic_list_comic_list_component__WEBPACK_IMPORTED_MODULE_3__["ComicListComponent"], _containers_comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_4__["ComicDetailComponent"], _components_comics_comics_component__WEBPACK_IMPORTED_MODULE_5__["ComicsComponent"], _components_comic_comic_component__WEBPACK_IMPORTED_MODULE_6__["ComicComponent"]]
        })
    ], ComicModule);
    return ComicModule;
}());



/***/ }),

/***/ "./src/app/comic/components/comic/comic.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/comic/components/comic/comic.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWljL2NvbXBvbmVudHMvY29taWMvY29taWMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/comic/components/comic/comic.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/comic/components/comic/comic.component.ts ***!
  \***********************************************************/
/*! exports provided: ComicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicComponent", function() { return ComicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_comic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/comic */ "./src/app/comic/models/comic.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComicComponent = /** @class */ (function () {
    function ComicComponent() {
    }
    ComicComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_comic__WEBPACK_IMPORTED_MODULE_1__["Comic"])
    ], ComicComponent.prototype, "comic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComicComponent.prototype, "details", void 0);
    ComicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comic',
            template: "\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h4 class=\"my-2\">\n        <ng-container *ngIf=\"details; else link\">\n          {{comic.name}}\n        </ng-container>\n        <ng-template #link>\n          <a [routerLink]=\"comic.id\">{{comic.name}}</a>\n        </ng-template>\n      </h4>\n    </div>\n    <img [attr.src]=\"comic.image\" [attr.alt]=\"comic.name\" class=\"card-img\">\n    <div class=\"card-body\" *ngIf=\"details\">\n      <p class=\"my-2\">{{comic.description}}</p>\n    </div>\n    <div class=\"card-footer\">\n      <h4 class=\"text-right my-2\">{{comic.price}}</h4>\n    </div>\n  </div>\n",
            styles: [__webpack_require__(/*! ./comic.component.scss */ "./src/app/comic/components/comic/comic.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComicComponent);
    return ComicComponent;
}());



/***/ }),

/***/ "./src/app/comic/components/comics/comics.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/comic/components/comics/comics.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWljL2NvbXBvbmVudHMvY29taWNzL2NvbWljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/comic/components/comics/comics.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comic/components/comics/comics.component.ts ***!
  \*************************************************************/
/*! exports provided: ComicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsComponent", function() { return ComicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComicsComponent = /** @class */ (function () {
    function ComicsComponent() {
    }
    ComicsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComicsComponent.prototype, "comics", void 0);
    ComicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comics',
            template: "\n    <div class=\"row\">\n    <div class=\"col-md-4 cl-lg-4 mb-3\" *ngFor=\"let comic of comics\">\n      <app-comic [comic]=\"comic\" [details]=\"false\"></app-comic>\n    </div>\n  </div>",
            styles: [__webpack_require__(/*! ./comics.component.scss */ "./src/app/comic/components/comics/comics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComicsComponent);
    return ComicsComponent;
}());



/***/ }),

/***/ "./src/app/comic/containers/comic-detail/comic-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/comic/containers/comic-detail/comic-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWljL2NvbnRhaW5lcnMvY29taWMtZGV0YWlsL2NvbWljLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/comic/containers/comic-detail/comic-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/comic/containers/comic-detail/comic-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ComicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicDetailComponent", function() { return ComicDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_comic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/comic */ "./src/app/comic/models/comic.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_comic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comic.service */ "./src/app/comic/services/comic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComicDetailComponent = /** @class */ (function () {
    function ComicDetailComponent(route, service) {
        this.route = route;
        this.service = service;
        this.comic = new _models_comic__WEBPACK_IMPORTED_MODULE_1__["Comic"]();
    }
    ComicDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getComic(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (res) { return _this.comic = res; });
    };
    ComicDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comic-detail',
            template: "\n   <app-comic [comic]=\"comic\"></app-comic>\n  ",
            styles: [__webpack_require__(/*! ./comic-detail.component.scss */ "./src/app/comic/containers/comic-detail/comic-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_comic_service__WEBPACK_IMPORTED_MODULE_3__["ComicService"]])
    ], ComicDetailComponent);
    return ComicDetailComponent;
}());



/***/ }),

/***/ "./src/app/comic/containers/comic-list/comic-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/comic/containers/comic-list/comic-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWljL2NvbnRhaW5lcnMvY29taWMtbGlzdC9jb21pYy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/comic/containers/comic-list/comic-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comic/containers/comic-list/comic-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ComicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicListComponent", function() { return ComicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/comic.service */ "./src/app/comic/services/comic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComicListComponent = /** @class */ (function () {
    function ComicListComponent(service) {
        this.service = service;
        this.comics = [];
    }
    ComicListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getComics()
            .subscribe(function (res) { return _this.comics = res; });
    };
    ComicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comic-list',
            template: "\n    <app-comics [comics]=\"comics\"></app-comics>\n  ",
            styles: [__webpack_require__(/*! ./comic-list.component.scss */ "./src/app/comic/containers/comic-list/comic-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_comic_service__WEBPACK_IMPORTED_MODULE_1__["ComicService"]])
    ], ComicListComponent);
    return ComicListComponent;
}());



/***/ }),

/***/ "./src/app/comic/models/comic.ts":
/*!***************************************!*\
  !*** ./src/app/comic/models/comic.ts ***!
  \***************************************/
/*! exports provided: Comic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comic", function() { return Comic; });
var Comic = /** @class */ (function () {
    function Comic() {
    }
    return Comic;
}());



/***/ }),

/***/ "./src/app/comic/services/comic.service.ts":
/*!*************************************************!*\
  !*** ./src/app/comic/services/comic.service.ts ***!
  \*************************************************/
/*! exports provided: ComicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicService", function() { return ComicService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;


var ComicService = /** @class */ (function () {
    function ComicService(http) {
        this.http = http;
    }
    ComicService.prototype.getComics = function () {
        return this.http.get(baseUrl);
    };
    ComicService.prototype.getComic = function (id) {
        return this.http.get(baseUrl + "/" + id);
    };
    ComicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ComicService);
    return ComicService;
}());



/***/ })

}]);
//# sourceMappingURL=comic-comic-module.js.map