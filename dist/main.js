"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SyntaxChecker = /** @class */ (function () {
    function SyntaxChecker(options) {
        this.brackets = [];
        this.options = {
            brackets: [],
            start: '',
            end: ''
        };
        this._setOptions(options);
    }
    ;
    SyntaxChecker.prototype._setOptions = function (options) {
        if (options)
            this.options = options;
    };
    SyntaxChecker.prototype.checkBracket = function (block) {
        var _this = this;
        this.brackets = block.split('').reduce(function (acc, current) {
            if (current === _this.options.brackets[acc[acc.length - 1]]) {
                acc.pop();
            }
            else {
                acc.push(current);
            }
            return acc;
        }, []);
        return this.brackets.length === 0;
    };
    SyntaxChecker.prototype.validate = function (block) {
        var _this = this;
        return Object.keys(this.options).map(function (key) {
            switch (key) {
                case 'brackets':
                    return _this.checkBracket(block);
                case 'start':
                    return block.startsWith(_this.options[key]);
                case 'end':
                    return block.endsWith(_this.options[key]);
            }
        }).every(function (value) { return value === true; });
    };
    return SyntaxChecker;
}());
exports.default = SyntaxChecker;
;
