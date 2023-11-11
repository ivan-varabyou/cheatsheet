var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);     // start: 3, stop: 6
abc.substring(1, 3)  // start: 1, count: 3
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc.codePointAt()               // convert to code point
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
128.toString(16);               // number to hex(16), octal (8) or binary (2)
abc.trim()
abc.trimEnd()
abc.trimStart()

abc.normalize() //  u0065 > N
abc.padEnd(25, '.') // Breaded Mushrooms........
abc.padStart(10, '*') // "************5"
abc.repeat(3) // abc + abc + abc

paragraph.search(/[^\w\s]/g) // 43 индекс первого совпадения в строке.
abc..endsWith()  // заканчивается ли строка символами этой строки  ==> Boolean
abc.match(/[A-Z]/g;) //  Array ["T", "I"]
abc.toLocaleLowerCase('en-US')
abc.toLocaleUpperCase('tr')
abc.toLowerCase()
abc.toUpperCase()

new String('foo').valueOf() // foo