const array = [1,2,3,4,5,6,7,8];
const array2 = [20,21,22,23,24,25,26,27];

array.at(-1); // => 8
array.map((value, index, array) => { value  })
array.forEach((value, index, array) => { });
for (const item of array) { }
for (let i; i < array.length; i++) { }

[🍈,🍉,🍌].reduce((previousValue, currentValue, currentIndex, array) => { }, initialValue)
[🍈,🍉,🍌].reduceRight((prevValue, currentValue, currentIndex, array) => { }, initialValue);

array.entries(); // convert to Object iterators [0, "a"] {}.next().value
Array.prototype.entries.call({ length: 3, 0: "a", 1: "b", 2: "c", 3: "d" };) //! // [ 0, 'a' ] // [ 1, 'b' ] // [ 2, 'c' ]
array.keys()// convert to Object iterators Index {}.next().value
array.values()// convert to Object iterators Value {}.next().value
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

array.copyWithin(target, start, end)

["1", "2", "3", "4"].copyWithin(0, 1, 2); // ["1", "2", "3"]
[0, 1, 2, [[[3, 4], 4], 4]].flat(); // [0, 1, 2, Array(2), 4]
[0, 1, 2, [[[3, 4], 4], 4]].flat(Infinity); // [0, 1, 2, 3, 4, 4, 4]
[0, 1, 2, [[[3, 4], 4], 4]].flatMap((value, index, array) => value); a


Array.of('foo', 2, 'bar', true) or Array(7) // => ["foo", 2, "bar", true]
Array.from(arrayLike, mapFn, thisArg);
Array.from('foo'); // ["f", "o", "o"]
Array.from([1, 2, 3], (x) => x + x); // Array [2, 4, 6]
Array.isArray()  // => boolean
Array.from(array, x => ++x); a
[1, 2, 3, 4, 5].with(2, 6); // [1, 2, 6, 4, 5] -- replace index 2 to  6

array.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
array.join(" * ");                       // join: "Bulldog * Beagle * Labrador"

delete array[0];                         // change element to undefined (not recommended)

highest = array[0];                         // first item in sorted array is the lowest (or highest) value
array.sort((a, b){return 0.5 - Math.random()});     // random order sort
array.includes(3) // => boolean
array.indexOf(2) // => 1 or -1
["1", "2", "3", "4"].every((v) => v === 2); // false
["1", "2", "3", "4"].some((v) => v === 2); // true
array.find(el => el === 2); // => 2
array.findLast(el => el === 1); // => 1 or -1
array.findIndex(el => el === 2); // => 1
array.findLastIndex(el => el === 2); // => 4

array.splice(0, 2);    // remove - start:0 count:2   //!SIDE EFFECT  => without ==> slice() || arr1.filter(a => a !== 'e') || toSliced()
array.splice(2, 1, 30); // mutation and replace remove - start:2 count:1 paste:30 //!SIDE EFFECT  => without ==>  arr1.map(item => {if(item === 'c'))
array.toSliced(2, 1, 30); //todo => new Array new METHOD on splice
array.filter((v, i, arr) => v === "1") // [1]
array.slice(1, -1);  // copy - start:1 end:-1

[1,3,2].reverse(); // [2,3,1] //!SIDE EFFECT
array.toRevesed() //todo => new Array
[1,3,2].sort((a, b) =>  a - b);  // [1,2,3]  //!SIDE EFFECT -- if  a > b => a=>
[1,3,2].sort((a, b) => b - a);  //[3,2,1] //!SIDE EFFECT
array.toSorted() // => new Array

array.pop();           //  [last-] => lastremoved           //!SIDE EFFECT
array.push();      // [last+] => new length                 //!SIDE EFFECT  => without ==> array.concat() or ...spred
array.concat(array2);  // join two arrays (dogs followed by cats and birds)
array.shift();         // [first-] => first removed         //!SIDE EFFECT
array.unshift();       // [first+] => new length            //!SIDE EFFECT