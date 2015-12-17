"use strict";
var Maybe = (function () {
    function Maybe(value) {
        this._value = value;
    }
    Maybe.Some = function (value) {
        return new Maybe(value);
    };
    ;
    Maybe.None = function () {
        return new Maybe(null);
    };
    ;
    Object.defineProperty(Maybe.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Maybe.prototype, "isSome", {
        get: function () {
            return this._value !== null && this._value !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Maybe.prototype, "isNone", {
        get: function () {
            return !this.isSome;
        },
        enumerable: true,
        configurable: true
    });
    Maybe.prototype.map = function (mapper) {
        if (this.isSome) {
            return new Maybe(mapper(this._value));
        }
        else {
            return new Maybe(null);
        }
    };
    return Maybe;
})();
exports.Maybe = Maybe;
