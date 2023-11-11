let test = 123;
test = isNaN(123);

Number.isFinite(123);
Number.isInteger(123); //  является ли переданное значение целым числом.
Number.isNaN(123); //  является ли переданное значение числовым значением
Number.isSafeInteger(); // является ли предоставленное значение числом, которое является безопасным целым числом
Number.parseFloat(1.23); // возвращает число с плавающей запятой
Number.parseInt(); // возвращает целое число
Number.parseFloat(123456).toExponential(2); // представляющую это число в экспоненциальной записи. output: "1.23e+5"
Number.parseFloat(12.3456).toFixed(2); // 12.34

function hexColour(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}
console.log(hexColour(233)); // Expected output:  e9

const numObj = new Number(42);
const num = numObj.valueOf(); // 42
