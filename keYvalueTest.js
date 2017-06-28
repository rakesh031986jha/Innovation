//var Hash = require('hashmap');

var Map = require('Map');

var map = new Map();
map.set('key', {value: 'value'});
map.set('something', 'else');

console.log('There are', map.size, 'item(s) in the map');

iterator = map.entries();
while (!iterator.done) {
    console.log(iterator.key, '=', iterator.value);
    iterator.next();
}
