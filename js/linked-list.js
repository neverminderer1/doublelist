"use strict";

let Element = require('./element');

class LinkedList {
    constructor(...args) {
        this._head = null;
        this._tail = null;

        if(arguments.length === 1) {
            if(Array.isArray(arguments[0])) {
                this._head = new Element(arguments[0][0], null, null);

                for(let i=1; i < arguments[0].length; i++) {
                    this.add(arguments[0][i]);
                }

            } else {
                this._head = new Element(arguments[0], null, null);
            }
        }

        if(arguments.length > 1) {
            for(let i=0; i < arguments.length; i++) {
                this.add(arguments[i]);
            }
        }
    }

    add(value) {
        let newElement;

        if(this._tail) {
            newElement = new Element(value, this._tail, null);
        } else {
            newElement = new Element(value, this._head, null);
        }

        this._tail = newElement;
    }

    addFirst(value) {
        let newElement = new Element(value, null, this._head);
        this._head = newElement;
    }

    remove(value) {
        let node = this._head;
        while(node.next) {
            if(node.value === value) {
                node.prev = node.next;
                return 'Found!';
            }
        }

        return 'Not Found!';
    }

    removeAll(value) {
        let node = this._head;
        while(node.next) {
            if(node.value === value) {
                node.prev = node.next;
            }
        }
    }

    getCount() {
        let count = 0;
        let node = this._head;
        while(node.next) {
            count++;
            node = node.next;
        }

        return count;
    }

    convertToArray() {
        let resultArray = [];
        let node = this._head;

        while(node.next) {
            resultArray.push(node.value);
            node = node.next;
        }
    }

    addAfter(value) {
        let node = this._head;

        while(node.next) {
            if(node.value === value) {
                let newElement = new Element(value, node, node.next);
                node.next = newElement;

                return 'Added!';
            }
            node = node.next;
        }

        return 'Not added!';
    }

    print() {
        let node = this._head;

        while(node.next) {
            console.log(node, ',');
            node = node.next;
        }
    }

}

module.exports = LinkedList;