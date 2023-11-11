async function promiseRace<T>(values: Promise<T>[]) {
  return new Promise<T>((res, rej) => {
    return values.forEach((value) => value.then(res).catch(rej));
  });
}

async function promiseRaceSecont<T>(values: Promise<T>[]) {
  for (const value of values) {
    try {
      return Promise.resolve(await value);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

const UrlsJSONPlaceholder = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

const get = (url) => fetch(url);
const toJSON = (response) => response.JSON();

const test1 = Promise.race(UrlsJSONPlaceholder.map((url) => get(url))).then(
  (response) => {
    const formData = response.arrayBuffer();
    formData;
    const blob = response.blob();
    blob;
    const json = response.json();
    json;
    const text = response.arrayBuffer();
    text;
    const url = response.url;
    url;
    const status = response.status;
    status;
    const statusText = response.statusText;
    statusText;
    const type = response.type;
    type;
    const body = response.body;
    body;
    const bodyUsed = response.bodyUsed;
    bodyUsed;
    const redirected = response.redirected;
    redirected;
    const clone = response.clone();
    clone;
  }
);
test1;
const test2 = promiseRace(UrlsJSONPlaceholder.map((url) => get(url))).then(
  (response) => response.status
);
test2;
const test3 = promiseRaceSecont(
  UrlsJSONPlaceholder.map((url) => get(url))
).then((response) => response.status);
test3;
