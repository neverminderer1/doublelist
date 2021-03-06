"use strict";

class LinkedList {
    constructor(...args) {
        this._head  = null;
        this.length = 0;

        if(arguments.length === 1) {
            this.length++;
            this._head = new Element(arguments[0][0], null, null);

            if(Array.isArray(arguments[0])) {
                for (let i = 1; i < arguments[0].length; i++) {
                    this.add(arguments[0][i]);
                }
            }
        }

        if(arguments.length > 1) {
            this.length++;
            this._head = new Element(arguments[0], null, null);

            for(let i=1; i < arguments.length; i++) {
                this.add(arguments[i]);
            }
        }
    }

    add(value) {
        let newElement = new Element(value, null, null);

        if(!this.length) {
            this._head = newElement;
            this.length++;

        } else {
            let node = this._head;

            while(node.next) {
                node = node.next;
            }

            node.next = newElement;
            newElement.previous = node;

            this.length++;
        }
    }

    addFirst(value) {
        let element         = new Element(value, null, this._head);
        this._head.previous = element;
        this._head          = element;

        this.length++;
    }

    remove(value) {
        let node = this._head;

        while(node && node.next) {

            if(node.value === value) {
                if(node.next && node.previous) {
                    node.next.previous = node.previous;
                    node.previous.next = node.next;
                    node = null;

                    this.length--;
                    return;

                } else if(node.next && !node.previous) {
                    node.next.previous = null;
                    node = node.next;
                    this._head = node;

                    this.length--;
                    return;
                }
            }

            if(node) {
                node = node.next;
            }
        }

        if(this.length === 1) {
            this._head = null;
            node = null;
            this.length--;
            return;
        }

        if(node && node.value === value) {
            node.previous.next = null;
            node = null;
            this.length--;
            return;
        }
    }

    removeAll(value) {
        let node = this._head;
        let i    = this.length;

        while(i > 0) {
            if(node.value === value) {
                this.remove(value);
            }

            node = node.next;
            i--;
        }
    }

    getCount() {
        return this.length;
    }

    convertToArray() {
        let i           = this.length;
        let node        = this._head;
        let resultArray = [];

        while(i > 0) {
            resultArray.push(node.value);
            node = node.next;
            i--;
        }

        return resultArray;
    }

    addAfter(afterValue, value) {
        let node = this._head;
        let i    = this.length;

        while(i > 0) {
            if(node.value === afterValue) {
                let newElem = new Element(value, null, null);

                if(!node.next) {
                    node.next = newElem;

                    this.length++;
                    return;
                }

                if(node.next) {
                    newElem.next        = node.next;
                    newElem.previous    = node;
                    node.next           = newElem;

                    this.length++;
                    return;
                }
            }

            node = node.next;
            i--;
        }
    }

    print() {
        let node = this._head;
        let i = this.length;

        while(i > 0) {
            console.log(node.value);
            node = node.next;
            i--;
        }
    }

}