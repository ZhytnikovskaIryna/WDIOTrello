"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var index_js_1 = require("./components/index.js");
var Page = /** @class */ (function () {
    function Page() {
        this.mainMenu = new index_js_1.MainMenu();
        this.boardCreate = new index_js_1.BoardCreateWindow('[data-testid="header-create-menu-popover"]');
        this.boardCreateWorkspace = new index_js_1.BoardCreateWindow('[data-elevation="1"]');
    }
    Object.defineProperty(Page.prototype, "isPageLoaded", {
        get: function () {
            return $("[data-loading='false']");
        },
        enumerable: false,
        configurable: true
    });
    Page.prototype.open = function (path) {
        return browser.url("https://trello.com/".concat(path));
    };
    return Page;
}());
exports.Page = Page;
