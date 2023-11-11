for in => for (let key in object)

for of => for (item of array)
for await of => async fn * fo(){ yeld 1 } => async function () { for await (const num of foo()) { break; continue } }
for (let i; i < 10; i++) { break; continue }
while (isTrue) { break; continue }
do () while ()
if () else { }
switch (expr) { case value: break; default: return }

Object.create(Shape.prototype, { constructor: { value: Rectangle, enumerable: false, writable: true, configurable: true, } });
Object.create({}); // __proto__: null

Object.defineProperty(obj, 'property', { enumerable: false, configurable: false, (value: 'value', writable: false || get: () => { } && set: () => { }) })
Object.defineProperties(obj, { property: {}, property2: {} });
Object.getOwnPropertyDescriptor(obj, 'property') //one
Object.getOwnPropertyDescriptors(obj) // all
Object.getOwnPropertyNames(obj);
Object.getOwnPropertySymbols(obj);

Object.preventExtensions(obj); // запретить добавление новых свойств
Object.isExtensible(obj); // true - можно добавлять и удалять свойства
Object.seal(obj); // configurable = false - нельзя добавлять и удалять свойства
Object.isSealed(obj) // configurable = false ===> return TRUE
Object.freeze(obj); // configurable: false, writable: false Запрещает добавлять/удалять/изменять свойства
Object.isFrozen(obj) // onfigurable: false && writable: false ===> return TRUE

Object.fromEntries([
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
]) // {0: 'a', 1: 'b', 2: 'c'}
Object.fromEntries(new Map())
Object.assign(target, source1, source2, …); // copy object
Object.is(Null, 1);// => false ; являются ли два значения одним и тем же

Object.keys(obj); // keys =>  key[]
Object.values(obj); // values =>  value[]
Object.entries(obj); // (keys, values) => [key, value][]

Object.hasOwnProperty(propertyKey); // проверяет собственное ли свойство => лучше hasOwn
Object.hasOwn(object, "property"); // проверяет собственное ли свойство, ..! цепочку прототипов не проверяет!!!

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
Object.groupBy(inventory, ({type}) => type); // Object.groupBy || Object.group