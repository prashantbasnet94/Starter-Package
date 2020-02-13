"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Home_1 = require("../controllers/Home");
var AppHomeRoute = /** @class */ (function () {
    function AppHomeRoute() {
        this.home = new Home_1.Home();
    }
    AppHomeRoute.prototype.routes = function (app) {
        app.route('/test')
            .get(this.home.test);
    };
    return AppHomeRoute;
}());
exports.AppHomeRoute = AppHomeRoute;
//# sourceMappingURL=AppHomeRoute.js.map