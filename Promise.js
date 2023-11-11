// <pending> => (resolve<fulfilled> or reject<rejected>)
// throw new Error("o_O") === reject
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("123"), 100);
  setTimeout(() => reject("onRejected"), 1000);
});
promise2
  .then((resolve) => {
    console.log(resolve);
    return promise2;
  })
  .then((resolve) => {
    console.log(resolve);
    return resolve;
  })
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject))
  .finally(() => console.log("finaly"));
Promise.all([]); // 1 error all promose reject //! Promise.allFulfilled
// status 200
Promise.allSettled(iterable).then((response) => response); //! Promise.allSettled
// status: pending | fulfilled | rejected
// if fulfilled so => value
// if rejected => reason
Promise.race(iterable); //  //!Promise.oneSettled
Promise.any(iterable); // => Promise  //!Promise.oneFulfilled
// status 200

Promise.resolve(); // === new Promise(resolve => resolve(value))
Promise.reject(value); // === new Promise((_, reject) => reject(value)) // Promise.resolve(window.location) // начать с этого значения.then(httpGet) // вызвать для него httpGet.then(alert) // и вывести результат
Promise.reject(error);
