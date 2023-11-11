//! this - это контекст выполнения (контекст это как выполянется функция)
// ?= this === window || this === global
// window {
//     functionDeclaration: fn(){ this === window}
//     functionExpression: fn(){ this === window}
//     arrowFunction: () => { this === window}
//         object: {
//             functionDeclaration: fn(){ this === object };
//             functionExpression: fn(){ this === object };
//             arrowFunction: () => { this === window };
//             object2: {
//                 functionDeclaration: fn(){ this === object2 }
//                 functionExpression: fn(){ this === object2 }
//                 arrowFunction: () => { this === window };
//             }
//         }
// // }

function functionDeclaration() {
  let self = this;
  self;
  return function () {
    let self2 = this;
    self;
    return self2;
  };
}
functionDeclaration()();

const functionExpression = function () {
  let self = this;
  self;
};
functionExpression();

const functionNameExpression = function Name() {};

const arrowFunction = () => {
  let self = this;
  self;
};

// IFFE
((...params) => {
  params;
  // arguments
  let self = this;
  self;
  return params;
})("args", 1);

(function (...params) {
  params;
  arguments;
  let self = this;
  self;
})("args", 1);

(function iffe(...params) {
  params;
  arguments;
  iffe;
  let name = iffe.name;
  name;
  let self = this;
  self;
})("args", 1);

function functionClass() {
  let self = this;
  self;
}

function FunctionClass() {
  let self = this;
  self;
}

let test1 = functionClass();
test1;
let test2 = new FunctionClass();
test2;

const object = {
  Self: this, //  this window
  FE: function () {
    let self = this; // this {Self: Window, FE: ƒ, FNE: ƒ, AF: ƒ, AF2: ƒ}
    self;
    return self;
  },
  FNE: function FNE() {
    let self = this; // this {Self: Window, FE: ƒ, FNE: ƒ, AF: ƒ, AF2: ƒ}
    self;
    return self;
  },
  AF: () => this, //  this window
  AF2: () => {
    let self = this; //  this window
    self;
    return self;
  },
};

const testSelf = object.Self;
testSelf;
const testFE = object.FE();
testFE;
const testFNE = object.FNE();
testFNE;
const testAF = object.AF();
testAF;

const object2 = {
  FE: function () {
    const arraow = () => {
      let self = this; // window
      self;
      return self;
    };
    return arraow();
  },
  FE2: function () {
    let self0 = this;
    function declaration() {
      let self = this; // window
      self0;
      self;
      return self;
    }
    return declaration();
  },
  AF: () => {
    function declaration() {
      let self = this; // window
      self;
      return self;
    }
    return declaration();
  },
};

const test2FE = object2.FE();
test2FE;
const test2FE2 = object2.FE2();
test2FE2;
const test2AF = object2.AF();
test2AF;
