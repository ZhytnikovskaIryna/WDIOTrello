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
var page_js_1 = require("./page.js");
var ProfilePage = /** @class */ (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ProfilePage.prototype, "userName", {
        get: function () {
            return $("#username");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "bio", {
        get: function () {
            return $("#bio");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "saveButton", {
        get: function () {
            return $("[type='submit']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "memberAvatar", {
        get: function () {
            return $("[data-testid='header-member-menu-avatar']");
        },
        enumerable: false,
        configurable: true
    });
    ProfilePage.prototype.open = function () {
        return _super.prototype.open.call(this, "u/testinguser409");
    };
    return ProfilePage;
}(page_js_1.Page));
exports.default = new ProfilePage();
