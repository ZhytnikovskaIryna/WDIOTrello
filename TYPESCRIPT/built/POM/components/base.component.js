"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
var BaseComponent = /** @class */ (function () {
    function BaseComponent(rootSelector) {
        this.rootSelector = rootSelector;
    }
    Object.defineProperty(BaseComponent.prototype, "rootEl", {
        get: function () {
            return $(this.rootSelector);
        },
        enumerable: false,
        configurable: true
    });
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
