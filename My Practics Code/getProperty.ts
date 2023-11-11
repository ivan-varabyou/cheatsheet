const user = {
  a: {
    b: {
      c: 1,
    },
  },
  d: {
    e: {
      f: 2,
    },
  },
  g: 3,
};

function getProperty<T>(object: T, path: string) {
  const properties = path.split(".");
  properties;
  let propertyLength = properties.length;
  let i = 0;
  let result = object;
  while (propertyLength > i) {
    result = result[properties[i]];
    result;
    i++;
  }
  return result;
}

const result3 = getProperty(user, "g");
result3;
const result2 = getProperty(user, "d.e");
result2;
const result = getProperty(user, "a.b.c.z");
result;
