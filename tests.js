var λ = require('contra');
var test = require('tape');
var find = require('./');

test('find', function(t){

  var items = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6]
  ];

  find(λ, items, function(item, next){
    process.nextTick(function(){
      if(item[0] > 3){
        t.fail('once the item is found it should stop processing');
      }
      next(undefined, item[0] === 3);
    });
  }, function(err, item){
    if(err) return t.end(err);

    t.deepEquals(item, [3, 4]);

    t.end();
  });
});
