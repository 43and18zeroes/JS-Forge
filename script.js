const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

console.log(map.get("key1")); // value1

const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Ignored, as it's a duplicate

console.log(set.size); // 2