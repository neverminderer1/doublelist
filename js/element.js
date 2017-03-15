"use strict";

class Element  {
    constructor (value, prev, next) {
        this._value = value;
        this._prev  = prev;
        this._next  = next;
    }

    get next() {
        return this._next || null;
    }

    set next(value) {
        this._next = value;
    }

    get previous() {
        return this._prev || null;
    }

    set previous(value) {
        this._prev = value;
    }

    get value() {
        return this._value || null;
    }

    set value(value) {
        this._value = value;
    }
}

module.exports = Element;