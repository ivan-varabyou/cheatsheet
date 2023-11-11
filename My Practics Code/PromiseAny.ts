async function promiseAny<T>(values: Promise<T>[]) {
  const rejected: Promise<T>[] = [];
  for (const value of values) {
    try {
      return await value;
    } catch (error) {
      rejected.push(error);
    }
  }
  return rejected[0];
}

const UrlsJSONPlaceholder = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

const get = (url) => fetch(url);

const test1 = Promise.any(UrlsJSONPlaceholder.map((url) => get(url))).then(
  (response) => response.status
);
test1;

const test2 = promiseAny(UrlsJSONPlaceholder.map((url) => get(url))).then(
  (response) => response.status
);
test2;
