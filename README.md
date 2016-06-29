# contra-find

[![build status](https://secure.travis-ci.org/smallhelm/contra-find.svg)](https://travis-ci.org/smallhelm/contra-find)

Using contra, asynchronously find a value in a collection that matches a condition.

```js
var λ = require('contra');
var find = require('contra-find');

var items = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6]
];

find(λ, items, function(item, next){

  console.log('item :', item);

  process.nextTick(function(){
    console.log('check:', item);
    next(undefined, item[0] === 3);
  });

}, function(err, item){
  console.log('item found!', item);
});
```
output
```
item : [ 1, 2 ]
check: [ 1, 2 ]
item : [ 2, 3 ]
check: [ 2, 3 ]
item : [ 3, 4 ]
check: [ 3, 4 ]
item found! [ 3, 4 ]
```
Notice that it iterates in series and stops as soon as the item is found.

## License
MIT
