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
exports.BoardCreateComponent = void 0;
var base_component_js_1 = require("./base.component.js");
var BoardCreateComponent = /** @class */ (function (_super) {
    __extends(BoardCreateComponent, _super);
    function BoardCreateComponent(selector) {
        return _super.call(this, selector) || this;
    }
    Object.defineProperty(BoardCreateComponent.prototype, "inputBoardTitle", {
        get: function () {
            return this.rootEl.$("[data-testid='create-board-title-input']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardCreateComponent.prototype, "buttonCreateBoard", {
        get: function () {
            return this.rootEl.$("button[data-testid='create-board-submit-button']");
        },
        enumerable: false,
        configurable: true
    });
    return BoardCreateComponent;
}(base_component_js_1.BaseComponent));
exports.BoardCreateComponent = BoardCreateComponent;
