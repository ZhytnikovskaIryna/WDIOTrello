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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("./page");
var BoardsPage = /** @class */ (function (_super) {
    __extends(BoardsPage, _super);
    function BoardsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BoardsPage.prototype, "boardName", {
        get: function () {
            return $("[data-testid='board-name-display']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "memberAvatar", {
        get: function () {
            return $("[data-testid='header-member-menu-avatar']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "listTitle", {
        get: function () {
            return $("textarea[name='Enter list title…']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "addListButton", {
        get: function () {
            return $("[data-testid='list-composer-add-list-button']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "listName", {
        get: function () {
            return $("[data-testid='list-name']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "addCard", {
        get: function () {
            return $("[data-testid='list-add-card-button']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "cardName", {
        get: function () {
            return $("[data-testid='list-card-composer-textarea']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "cardCreate", {
        get: function () {
            return $("[data-testid='list-card-composer-add-card-button']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardsPage.prototype, "createdCardName", {
        get: function () {
            return $("[data-testid='card-name']");
        },
        enumerable: false,
        configurable: true
    });
    BoardsPage.prototype.open = function () {
        return _super.prototype.open.call(this, "u/testinguser409/boards");
    };
    BoardsPage.prototype.createBoard = function (boardName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.open()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.mainMenu.createButton.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.mainMenu.createBoardButton.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.boardCreate.inputBoardTitle.setValue(boardName)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.boardCreate.buttonCreateBoard.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardsPage.prototype.createList = function (listName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listTitle.setValue(listName)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.addListButton.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardsPage.prototype.createCard = function (cardName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addCard.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cardName.setValue(cardName)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cardCreate.click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return BoardsPage;
}(page_1.Page));
exports.default = new BoardsPage();
