const arrs = [-4, -1, 0, 3, 10];

function sortAndPow(array,pow) {
  console.log(array);
  
  const powFn = (value) => Math.pow(value, pow);
  let newArray = [...array];
  let next = true
  let index = 0
  let count = 0
  let left, right 
  const result = [] 
  while(next) {
    left = newArray[index]
    right = newArray[index + 1]
    console.log(left, right);

    if (Math.abs(left) > Math.abs(right)) {
      result[index] = powFn(right);
      result[index+1] = powFn(left);
      newArray[index] = right
      newArray[index+1] = left
      count++
    } else {
      result[index] = powFn(left);
      newArray[index] = left
    }
    index++;
    console.log(result)

    if(count > 0 && newArray.length === index) {
      next = true
      index = 0
      count = 0
    } else if (newArray.length === index){
      next = false
    }
  }

  return newArray
} 

console.log(sortAndPow(arrs,2))

