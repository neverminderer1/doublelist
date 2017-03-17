let LinkedList = require('./linked-list');
let Element = require('./element');

let list = new LinkedList(45, 1, 23, 1);


list.addAfter(23, 1);

list.addFirst(1);

console.log(list.convertToArray());

list.removeAll(1);

console.log(list.convertToArray());