const numberRandom = (max: number) => {
  return max ? Math.floor(Math.random() * max);
};

const testNumberRandomArray = [1,10, 20, 30, 40, 50, 60];

const testNumberRandom = (array) => {
  for (let i = 0; i < testNumberRandomArray.length; i++) {
    const result = numberRandom(testNumberRandomArray[i]);
    if (!(Number.isInteger(result) && result >= 0 && result <= testNumberRandomArray[i]))
      return false;
  }
  return true;
};

const test1 = testNumberRandom(testNumberRandomArray);
test1;

const randomAndSlice = (to: number, from?: number = 0 ) =>
  Math.random().toString().slice(from, to);

const colorRandom = (type: "rgba" | "rgb") => {
  const rbg = `${numberRandom(255)} ${numberRandom(255)} ${numberRandom(255)}`;
  switch (type) {
    case "rgba":
      const opacity = randomAndSlice(4);
      return `rgba(${rbg} / ${numberRandom(100)}%)`;
    default:
      return `rgb(${rbg}) / 1%`;
  }
};

const result = colorRandom("rgba");
result;
// // round <>
// // floor <
// // ceil >
