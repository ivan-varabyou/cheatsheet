const isPaneObject = (element) => {
  return Object.prototype.toString.call(element).slice(8, -1) === "Object";
};

const test = isPaneObject({});
test;
