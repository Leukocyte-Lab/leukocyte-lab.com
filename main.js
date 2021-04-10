(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+4Xn":
/*!****************************************************************************!*\
  !*** ./src/app/@theme/layouts/column/dual-column/dual-column.component.ts ***!
  \****************************************************************************/
/*! exports provided: DualColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DualColumnComponent", function() { return DualColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["lkc-dual-column", ""];
const _c1 = [[["", "lkc-col-content", "", "col-1", ""]], [["", "lkc-col-content", "", "col-2", ""]]];
const _c2 = ["[lkc-col-content][col-1]", "[lkc-col-content][col-2]"];
class DualColumnComponent {
    constructor() {
        this.columns = '1fr 1fr';
    }
    ngOnInit() { }
}
DualColumnComponent.ɵfac = function DualColumnComponent_Factory(t) { return new (t || DualColumnComponent)(); };
DualColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DualColumnComponent, selectors: [["", "lkc-dual-column", ""]], inputs: { columns: "columns" }, attrs: _c0, ngContentSelectors: _c2, decls: 5, vars: 2, consts: [[1, "column", "column-container", "column--dual"], [1, "column", "col-1"], [1, "column", "col-2"]], template: function DualColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-template-columns", ctx.columns);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdWFsLWNvbHVtbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/leukocyte-lab.com/leukocyte-lab.com/src/main.ts */"zUnb");


/***/ }),

/***/ "3t1B":
/*!*******************************************************************************!*\
  !*** ./src/app/@theme/components/banner/main-banner/main-banner.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MainBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBannerComponent", function() { return MainBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_theme_layouts_column_dual_column_dual_column_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@theme/layouts/column/dual-column/dual-column.component */ "+4Xn");


const _c0 = ["lkc-main-banner", ""];
class MainBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainBannerComponent.ɵfac = function MainBannerComponent_Factory(t) { return new (t || MainBannerComponent)(); };
MainBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBannerComponent, selectors: [["", "lkc-main-banner", ""]], attrs: _c0, decls: 44, vars: 1, consts: [[1, "banner", "banner-bg", "banner-bg--overlap", "banner-bg--home"], ["src", "assets/images/bg-grid-attack-traffic.svg", "alt", ""], ["lkc-dual-column", "", 1, "banner", "main-banner", 3, "columns"], ["lkc-col-content", "", "col-1", ""], [1, "logo", "logo-font", "logo-font--white", "logo-font--horizon"], ["src", "assets/images/font-full-white-xl.svg", "alt", "Leukocyte-Lab Co., Ltd.", 1, "logo", "logo-image"], ["src", "assets/images/font-full-white-xl.svg", "alt", "", 1, "logo", "logo-image", "logo-shadowed", "mask--light"], ["src", "assets/images/font-full-white-xl.svg", "alt", "", 1, "logo", "logo-image", "logo-shadowed", "mask--dark"], [1, "banner", "banner-header"], [1, "title", "font--seo-only"], [1, "title"], [1, "subtitle", "font-blod"], [1, "paragraph"], [1, "font--seo-only"], ["lkc-col-content", "", "col-2", ""], [1, "logo", "logo-graph", "logo-graph--main-complex"], ["src", "assets/images/main-logo-taton-white-alpha.png", "alt", "LKC", 1, "logo", "logo-image"]], template: function MainBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "header", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Leukocyte-Lab Co., Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LKC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u76E7\u6C2A\u8CFD\u5FD2\u80A1\u4EFD\u6709\u9650\u516C\u53F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u76E7\u6C2A\u8CFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ruby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u5FD2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "rp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "rt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u310A\u311C\u02CB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "rp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Look After Your Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u6211\u5011\u63D0\u4F9B\u5148\u9032\u7684");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u6F0F\u6D1E\u6316\u6398\u3001\u6EF2\u900F\u6E2C\u8A66\u3001\u7D05\u968A\u6F14\u7DF4\u3001\u6559\u80B2\u8A13\u7DF4\u3001\u9867\u554F\u670D\u52D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u4EE5\u53CA BAS \u85CD\u968A\u9A57\u8B49\u7CFB\u7D71\u7522\u54C1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u5354\u52A9\u4F01\u696D\u63D0\u5347\u8CC7\u5B89\u514D\u75AB\u529B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", "1fr 480px");
    } }, directives: [src_app_theme_layouts_column_dual_column_dual_column_component__WEBPACK_IMPORTED_MODULE_1__["DualColumnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWJhbm5lci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "6a3b":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/layouts/column/single-column/single-column.component.ts ***!
  \********************************************************************************/
/*! exports provided: SingleColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleColumnComponent", function() { return SingleColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["lkc-single-column", ""];
const _c1 = ["*"];
class SingleColumnComponent {
    constructor() { }
    ngOnInit() { }
}
SingleColumnComponent.ɵfac = function SingleColumnComponent_Factory(t) { return new (t || SingleColumnComponent)(); };
SingleColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleColumnComponent, selectors: [["", "lkc-single-column", ""]], attrs: _c0, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "column", "column-container", "column--single"], [1, "column", "col-1"]], template: function SingleColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtY29sdW1uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "8lR5":
/*!****************************************************************************!*\
  !*** ./src/app/@theme/layouts/column/qual-column/qual-column.component.ts ***!
  \****************************************************************************/
/*! exports provided: QualColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualColumnComponent", function() { return QualColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["lkc-qual-column", ""];
const _c1 = [[["", "lkc-col-content", "", "col-1", ""]], [["", "lkc-col-content", "", "col-2", ""]], [["", "lkc-col-content", "", "col-3", ""]], [["", "lkc-col-content", "", "col-4", ""]]];
const _c2 = ["[lkc-col-content][col-1]", "[lkc-col-content][col-2]", "[lkc-col-content][col-3]", "[lkc-col-content][col-4]"];
class QualColumnComponent {
    constructor() {
        this.columns = '1fr 1fr 1fr 1fr';
    }
    ngOnInit() { }
}
QualColumnComponent.ɵfac = function QualColumnComponent_Factory(t) { return new (t || QualColumnComponent)(); };
QualColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QualColumnComponent, selectors: [["", "lkc-qual-column", ""]], inputs: { columns: "columns" }, attrs: _c0, ngContentSelectors: _c2, decls: 9, vars: 2, consts: [[1, "column", "column-container", "column--qual"], [1, "column", "col-1"], [1, "column", "col-2"], [1, "column", "col-3"], [1, "column", "col-4"]], template: function QualColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-template-columns", ctx.columns);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFsLWNvbHVtbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BBMM":
/*!********************************************************************!*\
  !*** ./src/app/@theme/components/spotlight/spotlight.component.ts ***!
  \********************************************************************/
/*! exports provided: SpotlightType, SpotlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotlightType", function() { return SpotlightType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotlightComponent", function() { return SpotlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = ["lkc-spotlight", ""];
const _c1 = [[["", "lkc-spotlight-image", ""]], [["", "lkc-spotlight-title", ""]], [["", "lkc-spotlight-content", ""]]];
const _c2 = function (a2) { return ["spotlight", "spotlight-container", a2]; };
const _c3 = ["[lkc-spotlight-image]", "[lkc-spotlight-title]", "[lkc-spotlight-content]"];
var SpotlightType;
(function (SpotlightType) {
    SpotlightType[SpotlightType["left"] = 0] = "left";
    SpotlightType[SpotlightType["right"] = 1] = "right";
})(SpotlightType || (SpotlightType = {}));
class SpotlightComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpotlightComponent.ɵfac = function SpotlightComponent_Factory(t) { return new (t || SpotlightComponent)(); };
SpotlightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpotlightComponent, selectors: [["", "lkc-spotlight", ""]], inputs: { type: "type" }, attrs: _c0, ngContentSelectors: _c3, decls: 7, vars: 3, consts: [[3, "ngClass"], [1, "spotlight", "spotlight-image"], [1, "spotlight", "spotlight-title"], [1, "spotlight", "spotlight-content"]], template: function SpotlightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, "spotlight-container--" + ctx.type));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG90bGlnaHQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Hh88":
/*!*********************************************************************!*\
  !*** ./src/app/@theme/components/banner/banner/banner.component.ts ***!
  \*********************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["lkc-banner", ""];
const _c1 = [[["", "lkc-banner-content", ""]]];
const _c2 = ["[lkc-banner-content]"];
class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["", "lkc-banner", ""]], attrs: _c0, ngContentSelectors: _c2, decls: 2, vars: 0, consts: [[1, "banner", "banner-container"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "LHMA":
/*!********************************************************************!*\
  !*** ./src/app/@theme/layouts/grid/hex-grid/hex-grid.component.ts ***!
  \********************************************************************/
/*! exports provided: HexGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexGridComponent", function() { return HexGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HexGridComponent {
    constructor() { }
    ngOnInit() { }
}
HexGridComponent.ɵfac = function HexGridComponent_Factory(t) { return new (t || HexGridComponent)(); };
HexGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HexGridComponent, selectors: [["agh-hex-grid"]], decls: 2, vars: 0, template: function HexGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hex-grid works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXgtZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Oz4n":
/*!***********************************************************!*\
  !*** ./src/app/@theme/layouts/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");


const _c0 = ["lkc-footer", ""];
const _c1 = function () { return ["fab", "linkedin"]; };
const _c2 = function () { return ["fab", "twitter"]; };
const _c3 = function () { return ["fab", "facebook"]; };
const _c4 = function () { return ["fab", "medium"]; };
const _c5 = function () { return ["fab", "github"]; };
const _c6 = function () { return ["fas", "envelope"]; };
const _c7 = function () { return ["fas", "phone-alt"]; };
const _c8 = function () { return ["fas", "map-marker-alt"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["", "lkc-footer", ""]], attrs: _c0, decls: 65, vars: 16, consts: [[1, "footer", "footer-container"], [1, "footer", "footer-bg"], ["src", "assets/images/font-short-white.svg", "alt", "LKC", 1, "logo", "logo-image"], [1, "footer", "footer-wrapper", "declare"], [1, "footer", "footer-content"], ["src", "assets/images/font-full-white-xl.svg", "alt", "Leukocyte-Lab Co., Ltd.", 1, "logo", "logo-font"], [1, "subtitle", "font-bold"], [1, "paragraph", "highlight"], [1, "paragraph"], [1, "footer", "footer-wrapper", "contact"], [1, "font-bold"], [1, "font-bold", "font--seo-only"], [1, "linker-box"], ["href", "https://linkedin.com/company/lkc-lab", "title", "LinkedIn", "aria-label", "LinkedIn", "target", "_blank", "rel", "noopener noreferrer", 1, "linker"], [3, "icon"], ["href", "https://twitter.com/CoLeukocyte", "title", "Twitter", "aria-label", "Twitter", "target", "_blank", "rel", "noopener noreferrer", 1, "linker"], ["href", "https://fb.com/LeukocyteLab", "title", "Facebook", "aria-label", "Facebook", "target", "_blank", "rel", "noopener noreferrer", 1, "linker"], ["href", "https://medium.com/h1dra-security-team", "title", "Medium", "aria-label", "Medium", "target", "_blank", "rel", "noopener noreferrer", 1, "linker"], ["href", "https://github.com/Leukocyte-Lab", "title", "GitHub", "aria-label", "GitHub", "target", "_blank", "rel", "noopener noreferrer", 1, "linker"], [1, "paragraph", "link"], [1, "font--seo-only"], ["href", "mailto:sales@lkc-lab.com"], [1, "icon", 3, "icon"], ["href", "tel:+886-2-2388-4321"], ["href", "https://g.page/LKC-Lab", "title", "Address \u5730\u5740", "aria-label", "Address \u5730\u5740", "target", "_blank", "rel", "noopener noreferrer", 1, "addr"], ["href", "https://leukocyte-lab.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u76E7\u6C2A\u8CFD\u5FD2\u80A1\u4EFD\u6709\u9650\u516C\u53F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Look After Your Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A9 2021 Leukocyte-Lab Co., Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u806F\u7D61\u8CC7\u8A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email: \u96FB\u5B50\u90F5\u4EF6:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "sales@lkc-lab.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tel: \u96FB\u8A71:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+886 2-2388-4321");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "104069 \u81FA\u5317\u5E02\u4E2D\u5C71\u5340");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u5EFA\u570B\u5317\u8DEF\u4E09\u6BB5 92 \u865F D416 \u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "address", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " You can contact author at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "leukocyte-lab.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ", or call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "+886 2-2388-4321");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ". If you wnat to get more into, send email to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "sales@lkc-lab.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ". You may also want to visit us: Leukocyte-Lab Co., Ltd. Room D416, No. 92, Sec. 3, Jianguo N. Rd., Jhongshan Dist., Taipei City 10482, Taiwan (R.O.C.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c8));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_theme_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@theme/layouts/footer/footer.component */ "Oz4n");



class AppComponent {
    constructor() {
        this.title = 'leukocyte-lab';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["lkc-root"]], decls: 4, vars: 0, consts: [[1, "viewport", "viewport-entry"], [1, "viewport", "viewport-footer"], ["lkc-footer", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], src_app_theme_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YNm+":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/layouts/column/triple-column/triple-column.component.ts ***!
  \********************************************************************************/
/*! exports provided: TripleColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripleColumnComponent", function() { return TripleColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["lkc-triple-column", ""];
const _c1 = [[["", "lkc-col-content", "", "col-1", ""]], [["", "lkc-col-content", "", "col-2", ""]], [["", "lkc-col-content", "", "col-3", ""]]];
const _c2 = ["[lkc-col-content][col-1]", "[lkc-col-content][col-2]", "[lkc-col-content][col-3]"];
class TripleColumnComponent {
    constructor() {
        this.columns = '1fr 1fr 1fr';
    }
    ngOnInit() { }
}
TripleColumnComponent.ɵfac = function TripleColumnComponent_Factory(t) { return new (t || TripleColumnComponent)(); };
TripleColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TripleColumnComponent, selectors: [["", "lkc-triple-column", ""]], inputs: { columns: "columns" }, attrs: _c0, ngContentSelectors: _c2, decls: 7, vars: 2, consts: [[1, "column", "column-container", "column--triple"], [1, "column", "col-1"], [1, "column", "col-2"], [1, "column", "col-3"]], template: function TripleColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-template-columns", ctx.columns);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmlwbGUtY29sdW1uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@theme/theme.module */ "vTDv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fab"]);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconLibrary"])); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"]] }); })();


/***/ }),

/***/ "aFBf":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/layouts/grid/quad-grid/quad-grid.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuadGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadGridComponent", function() { return QuadGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class QuadGridComponent {
    constructor() { }
    ngOnInit() { }
}
QuadGridComponent.ɵfac = function QuadGridComponent_Factory(t) { return new (t || QuadGridComponent)(); };
QuadGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuadGridComponent, selectors: [["agh-quad-grid"]], decls: 2, vars: 0, template: function QuadGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quad-grid works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFkLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vTDv":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: components, directives, entryComponents, ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return directives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entryComponents", function() { return entryComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var src_app_theme_components_banner_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@theme/components/banner/banner/banner.component */ "Hh88");
/* harmony import */ var src_app_theme_components_banner_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@theme/components/banner/main-banner/main-banner.component */ "3t1B");
/* harmony import */ var src_app_theme_layouts_column_single_column_single_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@theme/layouts/column/single-column/single-column.component */ "6a3b");
/* harmony import */ var src_app_theme_layouts_column_dual_column_dual_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@theme/layouts/column/dual-column/dual-column.component */ "+4Xn");
/* harmony import */ var src_app_theme_layouts_column_triple_column_triple_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/@theme/layouts/column/triple-column/triple-column.component */ "YNm+");
/* harmony import */ var src_app_theme_layouts_column_qual_column_qual_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/@theme/layouts/column/qual-column/qual-column.component */ "8lR5");
/* harmony import */ var src_app_theme_layouts_grid_quad_grid_quad_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/@theme/layouts/grid/quad-grid/quad-grid.component */ "aFBf");
/* harmony import */ var src_app_theme_layouts_grid_hex_grid_hex_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/@theme/layouts/grid/hex-grid/hex-grid.component */ "LHMA");
/* harmony import */ var src_app_theme_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/@theme/layouts/footer/footer.component */ "Oz4n");
/* harmony import */ var _components_spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/spotlight/spotlight.component */ "BBMM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");




// Banner


// Column




// Grid


// Footer

// Spotlight


const components = [
    src_app_theme_components_banner_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
    src_app_theme_components_banner_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_5__["MainBannerComponent"],
    src_app_theme_layouts_column_single_column_single_column_component__WEBPACK_IMPORTED_MODULE_6__["SingleColumnComponent"],
    src_app_theme_layouts_column_dual_column_dual_column_component__WEBPACK_IMPORTED_MODULE_7__["DualColumnComponent"],
    src_app_theme_layouts_column_triple_column_triple_column_component__WEBPACK_IMPORTED_MODULE_8__["TripleColumnComponent"],
    src_app_theme_layouts_column_qual_column_qual_column_component__WEBPACK_IMPORTED_MODULE_9__["QualColumnComponent"],
    src_app_theme_layouts_grid_quad_grid_quad_grid_component__WEBPACK_IMPORTED_MODULE_10__["QuadGridComponent"],
    src_app_theme_layouts_grid_hex_grid_hex_grid_component__WEBPACK_IMPORTED_MODULE_11__["HexGridComponent"],
    _components_spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_13__["SpotlightComponent"],
    src_app_theme_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
];
const directives = [];
const entryComponents = [];
class ThemeModule {
    static forRoot() {
        return {
            ngModule: ThemeModule,
            providers: [
                ...components,
                ...entryComponents,
                ...directives
            ]
        };
    }
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [src_app_theme_components_banner_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
        src_app_theme_components_banner_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_5__["MainBannerComponent"],
        src_app_theme_layouts_column_single_column_single_column_component__WEBPACK_IMPORTED_MODULE_6__["SingleColumnComponent"],
        src_app_theme_layouts_column_dual_column_dual_column_component__WEBPACK_IMPORTED_MODULE_7__["DualColumnComponent"],
        src_app_theme_layouts_column_triple_column_triple_column_component__WEBPACK_IMPORTED_MODULE_8__["TripleColumnComponent"],
        src_app_theme_layouts_column_qual_column_qual_column_component__WEBPACK_IMPORTED_MODULE_9__["QualColumnComponent"],
        src_app_theme_layouts_grid_quad_grid_quad_grid_component__WEBPACK_IMPORTED_MODULE_10__["QuadGridComponent"],
        src_app_theme_layouts_grid_hex_grid_hex_grid_component__WEBPACK_IMPORTED_MODULE_11__["HexGridComponent"],
        _components_spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_13__["SpotlightComponent"],
        src_app_theme_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_theme_components_banner_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
        src_app_theme_components_banner_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_5__["MainBannerComponent"],
        src_app_theme_layouts_column_single_column_single_column_component__WEBPACK_IMPORTED_MODULE_6__["SingleColumnComponent"],
        src_app_theme_layouts_column_dual_column_dual_column_component__WEBPACK_IMPORTED_MODULE_7__["DualColumnComponent"],
        src_app_theme_layouts_column_triple_column_triple_column_component__WEBPACK_IMPORTED_MODULE_8__["TripleColumnComponent"],
        src_app_theme_layouts_column_qual_column_qual_column_component__WEBPACK_IMPORTED_MODULE_9__["QualColumnComponent"],
        src_app_theme_layouts_grid_quad_grid_quad_grid_component__WEBPACK_IMPORTED_MODULE_10__["QuadGridComponent"],
        src_app_theme_layouts_grid_hex_grid_hex_grid_component__WEBPACK_IMPORTED_MODULE_11__["HexGridComponent"],
        _components_spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_13__["SpotlightComponent"],
        src_app_theme_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then((m) => m.HomeModule)
    },
    {
        path: 'news',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-news-news-module */ "pages-news-news-module").then(__webpack_require__.bind(null, /*! ./pages/news/news.module */ "qUUn")).then((m) => m.NewsModule)
    },
    {
        path: 'product',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-product-product-module */ "pages-product-product-module").then(__webpack_require__.bind(null, /*! ./pages/product/product.module */ "dFHt")).then((m) => m.ProductModule)
    }
];
const config = {
    useHash: false,
    onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy'
};
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map