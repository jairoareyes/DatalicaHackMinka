webpackJsonp([0],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailPageModule", function() { return TransactionDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_detail__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionDetailPageModule = /** @class */ (function () {
    function TransactionDetailPageModule() {
    }
    TransactionDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */]),
            ],
        })
    ], TransactionDetailPageModule);
    return TransactionDetailPageModule;
}());

//# sourceMappingURL=transaction-detail.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_historial__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionDetailPage = /** @class */ (function () {
    function TransactionDetailPage(navCtrl, navParams, historial) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historial = historial;
        this.item = new Array();
        this.item = navParams.get('transaccion');
    }
    TransactionDetailPage.prototype.ionViewDidLoad = function () {
        //this.item.push({"valor":"hola1","cliente":"Hola1"});
        //console.log(this.item2);
    };
    TransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-detail',template:/*ion-inline-start:"/home/jairo/Documents/appMinka/src/pages/transaction-detail/transaction-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Detalle de transacción</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item >\n    <img src={{item.imagen}}/>\n    <h1>{{item.valor}}</h1>\n    <p>Entidad: {{item.cliente}}</p>\n    <p>Fecha: {{item.fecha}}</p>\n    <p>Id transacción: {{item.validacion}}</p>\n    <p>Estado: {{item.estado}}</p>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/jairo/Documents/appMinka/src/pages/transaction-detail/transaction-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_historial_historial__["a" /* HistorialProvider */]])
    ], TransactionDetailPage);
    return TransactionDetailPage;
}());

//# sourceMappingURL=transaction-detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map