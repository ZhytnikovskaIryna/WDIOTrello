"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuComponent = void 0;
var base_component_js_1 = require("./base.component.js");
var MainMenuComponent = /** @class */ (function (_super) {
    __extends(MainMenuComponent, _super);
    function MainMenuComponent() {
        return _super.call(this, "body") || this;
    }
    Object.defineProperty(MainMenuComponent.prototype, "searchInput", {
        get: function () {
            return this.rootEl.$("[data-testid='cross-product-search-input-skeleton']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainMenuComponent.prototype, "searchResult", {
        get: function () {
            return this.rootEl.$("[data-testid='trello-hover-preview-popper-container'] span");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainMenuComponent.prototype, "createButton", {
        get: function () {
            return this.rootEl.$("[data-testid='header-create-menu-button']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainMenuComponent.prototype, "createBoardButton", {
        get: function () {
            return this.rootEl.$("[data-testid='header-create-board-button']");
        },
        enumerable: false,
        configurable: true
    });
    return MainMenuComponent;
}(base_component_js_1.BaseComponent));
exports.MainMenuComponent = MainMenuComponent;
