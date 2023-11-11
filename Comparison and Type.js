const array = [1, 2, 3, 4, 5, 1]
const array2 = [1, 2, 3, 4, 5, 1]
array === array2; // false
array.every((v, i) => v === array2[i]); // true

// typeof
// instanceof

typeof Infinity; // "number"
typeof number; // "number"
typeof NaN; // "number"
typeof 123; // "number"
typeof "123"; // "string"
typeof 1n; // "bigint"
typeof []; // => "object"
typeof {}; // => "object"
typeof null; // => "object"
typeof new Map(); Set() // => "object"
typeof fn(){ } // => "'function'"
typeof (a) => a // SyntaxError
typeof undefined; // => "undefined"
typeof true; // => "boolean"


Array.isArray([]) // true
isNaN(NaN); // true
isFinite(Infinity);

Object.prototype.toString.call([]) === "[object Array]";
Object.prototype.toString.call({}) === "[object Object]";
Object.prototype.toString.call("test") === "[object String]";
Object.prototype.toString.call(new Map()) === "[object Map]";
Object.prototype.toString.call(123) === "[object Number]";
Object.prototype.toString.call(1n) === "[object BigInt]";
Object.prototype.toString.call(Infinity) === "[object Number]";
Object.prototype.toString.call(NaN) === "[object Number]";
Object.prototype.toString.call(new Set()) === "[object Set]";
Object.prototype.toString.call(null) === "[object Null]";
Object.prototype.toString.call(undefined) === "[object Undefined]";
Object.prototype.toString.call(() => { }) === "[object Function]";
Object.prototype.toString.call(function name(params) { }) === "[object Function]";
Object.prototype.toString.call(String) === "[object Function]";
Object.prototype.toString.call(String()) === "[object Object]";
Object.prototype.toString.call(new ErrorEvent()) === "[object ErrorEvent]";
Object.prototype.toString.call(Symbol()) === "[object Symbol]";
Object.prototype.toString.call(window) === "[object Window]";
Object.prototype.toString.call(document) === "[object HTMLDocument]";
Object.prototype.toString.call(document.querySelector('div')) === "[object HTMLDivElement]";
Object.prototype.toString.call(document.getElementById('name')) === "[object HTMLParagraphElement]";
Object.prototype.toString.call(document.querySelectorAll('div')) === "[object NodeList]";
Object.prototype.toString.call(document.getElementsByTagName('div')) === '[object HTMLCollection]'
Object.prototype.toString.call(document.getElementsByClassName('')) === '[object HTMLCollection]'
Object.prototype.toString.call(window.document.addEventListener("click", ()=> {})) === '[object PointerEvent]'
Object.prototype.toString.call(window.document.addEventListener("keyup", ()=> {})) === '[object KeyboardEvent]'
Object.prototype.toString.call(window.document.addEventListener("scroll", ()=> {})) === '[object Event]'


document.addEventListener("click", () => console.log("click"), { once: true, capture: true, passive: true });