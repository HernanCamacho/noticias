(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/noticia-details/noticia-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/noticia-details/noticia-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-label>\n  <p *ngIf=\"noticia.author\">\n    Autor: {{ noticia.author }}\n  </p>\n  <p>\n    Fecha de publicación:\n    <time>{{noticia.publishedAt | date:'dd/MM/yyyy'}}</time>\n  </p>\n</ion-label>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/noticia/noticia.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/noticia/noticia.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card color=\"dark\">\n\n  <ion-card-header>\n    <ion-card-subtitle>\n      <span class=\"text-primary\">{{ i + 1 }}. </span>\n      <span class=\"noticia-source-name\">{{ noticia.source.name }}</span>\n\n      <div class=\"noticia-more\">\n        <ion-button fill=\"clear\"\n                    (click)=\"lanzarMenu()\">\n                    <ion-icon slot=\"icon-only\"\n                              name=\"more\"></ion-icon>\n\n        </ion-button>\n      </div>\n\n    </ion-card-subtitle>\n    <ion-card-title>{{ noticia.title }}</ion-card-title>\n  </ion-card-header>\n\n  <ion-img  *ngIf=\"noticia.urlToImage\"\n            class=\"animated fadeIn faster\"\n            [src]=\"noticia.urlToImage\">\n  </ion-img>\n  <ion-card-content>\n    <p>{{ noticia.description }}</p>\n    <ion-button fill=\"clear\"\n                (click)=\"viewDetails()\">\n      <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\n    </ion-button>\n    <app-noticia-details [noticia]=\"noticia\"  *ngIf=\"details\"></app-noticia-details>\n  </ion-card-content>\n\n</ion-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/noticias/noticias.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/noticias/noticias.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid fixed>\n\n  <ion-row>\n\n    <ion-col  size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\n              *ngFor=\"let noticia of noticias; let i = index\">\n\n      <app-noticia [noticia]=\"noticia\" [enFavoritos]=\"enFavoritos\" [i]=\"i\"></app-noticia>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n"

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noticias/noticias.component */ "./src/app/components/noticias/noticias.component.ts");
/* harmony import */ var _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noticia/noticia.component */ "./src/app/components/noticia/noticia.component.ts");
/* harmony import */ var _noticia_details_noticia_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noticia-details/noticia-details.component */ "./src/app/components/noticia-details/noticia-details.component.ts");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__["NoticiasComponent"],
            _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_5__["NoticiaComponent"],
            _noticia_details_noticia_details_component__WEBPACK_IMPORTED_MODULE_6__["NoticiaDetailsComponent"]
        ],
        exports: [
            _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__["NoticiasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/noticia-details/noticia-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/noticia-details/noticia-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWNpYS1kZXRhaWxzL25vdGljaWEtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/noticia-details/noticia-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/noticia-details/noticia-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: NoticiaDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaDetailsComponent", function() { return NoticiaDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoticiaDetailsComponent = class NoticiaDetailsComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NoticiaDetailsComponent.prototype, "noticia", void 0);
NoticiaDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-noticia-details',
        template: __webpack_require__(/*! raw-loader!./noticia-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/noticia-details/noticia-details.component.html"),
        styles: [__webpack_require__(/*! ./noticia-details.component.scss */ "./src/app/components/noticia-details/noticia-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NoticiaDetailsComponent);



/***/ }),

/***/ "./src/app/components/noticia/noticia.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/noticia/noticia.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noticia-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlcm5hbi9Eb2N1bWVudG9zL2lvbmljL25vdGljaWFzL3NyYy9hcHAvY29tcG9uZW50cy9ub3RpY2lhL25vdGljaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWNpYS9ub3RpY2lhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdGljaWEvbm90aWNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpY2lhLW1vcmUge1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogLTE4cHg7XG59XG4iLCIubm90aWNpYS1tb3JlIHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IC0xOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/noticia/noticia.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/noticia/noticia.component.ts ***!
  \*********************************************************/
/*! exports provided: NoticiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaComponent", function() { return NoticiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-local.service */ "./src/app/services/data-local.service.ts");






let NoticiaComponent = class NoticiaComponent {
    constructor(inAppBrowserService, actionSheetCtrl, socialSharing, dataLocalService) {
        this.inAppBrowserService = inAppBrowserService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.dataLocalService = dataLocalService;
        this.details = false;
    }
    lanzarMenu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let borrarBtn;
            if (this.enFavoritos) {
                borrarBtn = {
                    text: 'Quitar de favoritos',
                    icon: 'trash',
                    cssClass: 'action-dark',
                    handler: () => {
                        console.log('Borrar de favorito');
                        this.dataLocalService.borrarNoticia(this.noticia);
                    }
                };
            }
            else {
                borrarBtn = {
                    text: 'Favorito',
                    icon: 'star',
                    cssClass: 'action-dark',
                    handler: () => {
                        console.log('Favorito');
                        this.dataLocalService.guardarNoticia(this.noticia);
                    }
                };
            }
            const actionSheet = yield this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Compartir',
                        icon: 'share',
                        cssClass: 'action-dark',
                        handler: () => {
                            console.log('Share clicked');
                            this.socialSharing.share(this.noticia.title, this.noticia.source.name, '', this.noticia.url);
                        }
                    },
                    borrarBtn,
                    {
                        text: 'Cancelar',
                        icon: 'close',
                        cssClass: 'action-dark',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    viewDetails() {
        this.details ? this.details = false : this.details = true;
    }
};
NoticiaComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"] },
    { type: src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_5__["DataLocalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NoticiaComponent.prototype, "noticia", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], NoticiaComponent.prototype, "i", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NoticiaComponent.prototype, "enFavoritos", void 0);
NoticiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-noticia',
        template: __webpack_require__(/*! raw-loader!./noticia.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/noticia/noticia.component.html"),
        styles: [__webpack_require__(/*! ./noticia.component.scss */ "./src/app/components/noticia/noticia.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
        src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_5__["DataLocalService"]])
], NoticiaComponent);



/***/ }),

/***/ "./src/app/components/noticias/noticias.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWNpYXMvbm90aWNpYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/noticias/noticias.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.ts ***!
  \***********************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoticiasComponent = class NoticiasComponent {
    constructor() {
        this.enFavoritos = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NoticiasComponent.prototype, "noticias", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NoticiasComponent.prototype, "enFavoritos", void 0);
NoticiasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-noticias',
        template: __webpack_require__(/*! raw-loader!./noticias.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/noticias/noticias.component.html"),
        styles: [__webpack_require__(/*! ./noticias.component.scss */ "./src/app/components/noticias/noticias.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NoticiasComponent);



/***/ }),

/***/ "./src/app/services/data-local.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data-local.service.ts ***!
  \************************************************/
/*! exports provided: DataLocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLocalService", function() { return DataLocalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let DataLocalService = class DataLocalService {
    constructor(storage, toastController) {
        this.storage = storage;
        this.toastController = toastController;
        this.noticias = [];
        this.cargarFavoritos();
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1500
            });
            toast.present();
        });
    }
    guardarNoticia(noticia) {
        const existe = this.noticias.find(noti => noti.title === noticia.title);
        if (!existe) {
            this.noticias.unshift(noticia);
            this.storage.set('favoritos', this.noticias);
        }
        this.presentToast('Agregado a favoritos');
    }
    cargarFavoritos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const favoritos = yield this.storage.get('favoritos');
            if (favoritos) {
                this.noticias = favoritos;
            }
        });
    }
    borrarNoticia(noticia) {
        this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
        this.storage.set('favoritos', this.noticias);
        this.presentToast('Eliminado de favoritos');
    }
};
DataLocalService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
DataLocalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], DataLocalService);



/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module-es2015.js.map