(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battle/battle.component */ "./src/app/battle/battle.component.ts");
/* harmony import */ var _battle_history_battle_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle-history/battle-history.component */ "./src/app/battle-history/battle-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'players',
        pathMatch: 'full'
    },
    {
        path: 'players',
        component: _players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"]
    },
    {
        path: 'challenges',
        component: _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_3__["ChallengesComponent"]
    },
    {
        path: 'battle',
        component: _battle_battle_component__WEBPACK_IMPORTED_MODULE_4__["BattleComponent"]
    },
    {
        path: 'history',
        component: _battle_history_battle_history_component__WEBPACK_IMPORTED_MODULE_5__["BattleHistoryComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent }
];
*/
//export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
//https://www.sitepoint.com/component-routing-angular-router/


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<ul>\r\n  <li *ngFor=\"let item of items | async\">\r\n      <pre>{{ item | json }}</pre>\r\n  </li>\r\n</ul>\r\n-->\r\n\r\n\r\n\r\n<div class=\"site\" [ngClass]=\"{'site_show-nav': bShowNav}\">\r\n  <div class=\"site__header\">\r\n    <button (click)=\"toggleMenu()\">Menu</button>\r\n  </div>\r\n  <nav class=\"site__nav\">\r\n    <a href=\"/players\">Players</a>\r\n    <a href=\"/battle\">Battle!</a>\r\n    <a href=\"/challenges\">Challenges</a>\r\n    <a href=\"/histoy\">History</a>\r\n  </nav>\r\n  <div class=\"site__content\">\r\n\r\n\r\n\r\n    <tr *ngFor=\"let task of tasks | async; let i = index\" [attr.data-index]=\"i\">\r\n      <td>{{i + 1}}</td>\r\n      <td>:</td>\r\n      <td>{{task.description}}</td>\r\n      <td>\r\n        <button class=\"btn btn-success\" (click)=\"edit(task)\">\r\n          <i class=\"fa fa-edit\"></i>e\r\n        </button>\r\n        <button class=\"btn btn-danger\" (click)=\"deleteTask(task)\">\r\n          <i class=\"fa fa-remove\"></i>x\r\n        </button>\r\n      </td>\r\n    </tr>\r\n\r\n\r\n\r\n    <form #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <input [(ngModel)]=\"myTask\" name=\"myTask\" type=\"text\" class=\"form-control\" placeholder=\"Enter Task\" required>\r\n      </div>\r\n      <p *ngIf=\"loading\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </p>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" [disabled]=\"!f.valid\" (click)=\"saveTask()\">\r\n          Save Task\r\n        </button>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 0; }\n\nbody {\n  margin: 0; }\n\n.site {\n  display: block; }\n\n.site__header {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  background: red;\n  z-index: 1; }\n\n.site__content {\n  padding-top: 60px; }\n\n.site__nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 300px;\n  background: lightgrey;\n  color: white;\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0); }\n\n.site__nav > * {\n    display: block;\n    padding: 20px;\n    border-bottom: 1px solid grey; }\n\n.site__nav a {\n    color: black; }\n\n.site_show-nav .site__header,\n.site_show-nav .site__content {\n  -webkit-transform: translate(300px, 0);\n          transform: translate(300px, 0); }\n\n.site_show-nav .site__nav {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Item = /** @class */ (function () {
    function Item(title) {
        this.title = title;
    }
    return Item;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(db, tastService) {
        this.db = db;
        this.tastService = tastService;
        this.bShowNav = false;
        this.editMode = false;
        this.taskToEdit = {};
        //this.tasks = this.db.collection(config.collection_endpoint).valueChanges();
        this.tasks = this.db
            .collection(_app_config__WEBPACK_IMPORTED_MODULE_3__["config"].collection_endpoint)
            .snapshotChanges()
            .pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the id to the document data
                return __assign({ id: id }, data);
            });
        }));
    }
    AppComponent.prototype.toggleMenu = function () {
        this.bShowNav = !this.bShowNav;
    };
    AppComponent.prototype.edit = function (task) {
        console.log(task);
        //Set taskToEdit and editMode
        this.taskToEdit = task;
        this.editMode = true;
        //Set form value
        this.myTask = task.description;
    };
    AppComponent.prototype.saveTask = function () {
        if (this.myTask !== null) {
            //Get the input value
            var task = {
                description: this.myTask
            };
            if (!this.editMode) {
                console.log(task);
                this.tastService.addTask(task);
            }
            else {
                //Get the task id
                var taskId = this.taskToEdit.id;
                //update the task
                this.tastService.updateTask(taskId, task);
            }
            //set edit mode to false and clear form
            this.editMode = false;
            this.myTask = "";
        }
    };
    AppComponent.prototype.deleteTask = function (task) {
        //Get the task id
        var taskId = task.id;
        //delete the task
        this.tastService.deleteTask(taskId);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    collection_endpoint: "tasks",
    player_base_points: 100,
    victory_take_percentage: 25
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./battle/battle.component */ "./src/app/battle/battle.component.ts");
/* harmony import */ var _battle_history_battle_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./battle-history/battle-history.component */ "./src/app/battle-history/battle-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _players_players_component__WEBPACK_IMPORTED_MODULE_8__["PlayersComponent"],
                _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_9__["ChallengesComponent"],
                _battle_battle_component__WEBPACK_IMPORTED_MODULE_10__["BattleComponent"],
                _battle_history_battle_history_component__WEBPACK_IMPORTED_MODULE_11__["BattleHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/battle-history/battle-history.component.css":
/*!*************************************************************!*\
  !*** ./src/app/battle-history/battle-history.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/battle-history/battle-history.component.html":
/*!**************************************************************!*\
  !*** ./src/app/battle-history/battle-history.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  battle-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/battle-history/battle-history.component.ts":
/*!************************************************************!*\
  !*** ./src/app/battle-history/battle-history.component.ts ***!
  \************************************************************/
/*! exports provided: BattleHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleHistoryComponent", function() { return BattleHistoryComponent; });
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

var BattleHistoryComponent = /** @class */ (function () {
    function BattleHistoryComponent() {
    }
    BattleHistoryComponent.prototype.ngOnInit = function () {
    };
    BattleHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-battle-history',
            template: __webpack_require__(/*! ./battle-history.component.html */ "./src/app/battle-history/battle-history.component.html"),
            styles: [__webpack_require__(/*! ./battle-history.component.css */ "./src/app/battle-history/battle-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BattleHistoryComponent);
    return BattleHistoryComponent;
}());



/***/ }),

/***/ "./src/app/battle/battle.component.css":
/*!*********************************************!*\
  !*** ./src/app/battle/battle.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/battle/battle.component.html":
/*!**********************************************!*\
  !*** ./src/app/battle/battle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  battle works!\n</p>\n"

/***/ }),

/***/ "./src/app/battle/battle.component.ts":
/*!********************************************!*\
  !*** ./src/app/battle/battle.component.ts ***!
  \********************************************/
/*! exports provided: BattleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
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

var BattleComponent = /** @class */ (function () {
    function BattleComponent() {
    }
    BattleComponent.prototype.ngOnInit = function () {
    };
    BattleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-battle',
            template: __webpack_require__(/*! ./battle.component.html */ "./src/app/battle/battle.component.html"),
            styles: [__webpack_require__(/*! ./battle.component.css */ "./src/app/battle/battle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BattleComponent);
    return BattleComponent;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.component.css":
/*!*****************************************************!*\
  !*** ./src/app/challenges/challenges.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/challenges/challenges.component.html":
/*!******************************************************!*\
  !*** ./src/app/challenges/challenges.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  challenges works!\n</p>\n\n<div *ngFor=\"let challenge of challenges\">\n  <div>challenge: {{challenge.test}}</div>\n</div>"

/***/ }),

/***/ "./src/app/challenges/challenges.component.ts":
/*!****************************************************!*\
  !*** ./src/app/challenges/challenges.component.ts ***!
  \****************************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return ChallengesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChallengesComponent = /** @class */ (function () {
    function ChallengesComponent(dataService) {
        this.dataService = dataService;
        this.challenges = [];
    }
    ChallengesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getChallenges().subscribe(function (challenges) {
            _this.challenges = challenges;
        });
    };
    ChallengesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__(/*! ./challenges.component.html */ "./src/app/challenges/challenges.component.html"),
            styles: [__webpack_require__(/*! ./challenges.component.css */ "./src/app/challenges/challenges.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ChallengesComponent);
    return ChallengesComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(db) {
        this.db = db;
        this.playersCollection = this.db.collection('players', function (x) { return x.orderBy('firstName', 'asc'); });
        this.challengesCollection = this.db.collection('challenges');
        //this.players = db.collection<Player>('players');
        //this.players = db.collection<Player>('players').valueChanges();
        this.challenges = db.collection('challenges').valueChanges();
        this.players =
            //this.db.collection(config.collection_endpoint)
            this.playersCollection
                .snapshotChanges()
                .pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
                return actions.map(function (a) {
                    //Get document data
                    var data = a.payload.doc.data();
                    //Get document id
                    var id = a.payload.doc.id;
                    //Use spread operator to add the id to the document data
                    return __assign({ id: id }, data);
                });
            }));
    }
    DataService.prototype.getPlayers = function () {
        return this.players;
    };
    DataService.prototype.getChallenges = function () {
        return this.challenges;
    };
    DataService.prototype.addPlayer = function (player) {
        this.playersCollection.add(player);
    };
    DataService.prototype.deletePlayer = function (player) {
        this.playersDoc = this.db.doc("players/" + player.id);
        this.playersDoc.delete();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players/players.component.html":
/*!************************************************!*\
  !*** ./src/app/players/players.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  players works!\n</p>\n\n\n\n<div *ngIf=\"bInEditMode\">\n  <div *ngFor=\"let player of players\">\n    <input type=\"text\" [(ngModel)]=\"player.firstName\">\n    <button (click)=\"updatePlayer(player)\">Save</button>\n  </div>\n  <div>\n\n  </div>\n</div>\n<div *ngIf=\"!bInEditMode\">\n  <div *ngFor=\"let player of players\">\n    <div>{{player.firstName}}</div>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(dataService) {
        this.dataService = dataService;
        this.players = [];
        this.bInEditMode = true;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPlayers().subscribe(function (players) {
            _this.players = players;
        });
    };
    PlayersComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.name;
        console.log('prev value: ', name.previousValue);
        console.log('got name: ', name.currentValue);
    };
    PlayersComponent.prototype.createPlayer = function () {
    };
    PlayersComponent.prototype.updatePlayer = function (player) {
        console.log('player update', player);
    };
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PlayersComponent);
    return PlayersComponent;
}());

//https://medium.com/@jinalshah999/cloud-fire-store-crud-operation-using-angular-f319bef27ce0


/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(db) {
        this.db = db;
        //Get the tasks collection
        this.tasks = db.collection(_app_config__WEBPACK_IMPORTED_MODULE_0__["config"].collection_endpoint);
    }
    TaskService.prototype.addTask = function (task) {
        //Add the new task to the collection
        this.tasks.add(task);
    };
    TaskService.prototype.updateTask = function (id, update) {
        //Get the task document
        this.taskDoc = this.db.doc(_app_config__WEBPACK_IMPORTED_MODULE_0__["config"].collection_endpoint + "/" + id);
        this.taskDoc.update(update);
    };
    TaskService.prototype.deleteTask = function (id) {
        //Get the task document
        this.taskDoc = this.db.doc(_app_config__WEBPACK_IMPORTED_MODULE_0__["config"].collection_endpoint + "/" + id);
        //Delete the document
        this.taskDoc.delete();
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAunPTprmEFra6J8HLAAhO1KUC5z7Y0eJc",
        authDomain: "bachelor-f848e.firebaseapp.com",
        databaseURL: "https://bachelor-f848e.firebaseio.com",
        projectId: "bachelor-f848e",
        storageBucket: "bachelor-f848e.appspot.com",
        messagingSenderId: "117694270669"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Odin\Documents\Unreal Projects\bachelor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map