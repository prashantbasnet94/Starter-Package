"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var AppHomeRoute_1 = require("./routes/AppHomeRoute");
var framework = require('express')(), http = require('http').Server(framework);
// for auth
var App = /** @class */ (function () {
    function App() {
        this.homeRoute = new AppHomeRoute_1.AppHomeRoute();
        this.app = express_1.default();
        this.app.use(require("express-session")({
            secret: "It looks like there aren't any great matches for your search",
            resave: false,
            saveUninitialized: false
        }));
        this.config();
        // this.app.use(this.auth.isLoggedIn)
        this.homeRoute.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.set("view engine", "ejs");
        this.app.use(express_1.default.static("public"));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map