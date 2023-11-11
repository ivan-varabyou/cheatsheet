async function promiseAllSettled<T>(values: T[]) {
  const response: PromiseSettledResult<T>[] = [];
  for (const value of values) {
    try {
      response.push({ status: "fulfilled", value: await value });
    } catch (error) {
      response.push({ status: "rejected", reason: error });
    }
  }
  return response;
}

const UrlsJSONPlaceholder = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

const get = (url) => fetch(url);
const toJSON = (response) => response.JSON();

const test1 = Promise.allSettled(
  UrlsJSONPlaceholder.map((url) => get(url))
).then((response) =>
  response.map((v) => (v.status === "fulfilled" ? v.value : v.reason))
);
test1;

const test2 = promiseAllSettled(
  UrlsJSONPlaceholder.map((url) => get(url))
).then((response) =>
  response.map((v) => (v.status === "fulfilled" ? v.value : v.reason))
);
test2;

const test3 = Promise.allSettled(
  UrlsJSONPlaceholder.map((url) => get(url))
).then(([response]) => {
  if (response.status === "fulfilled") {
    const formData = response.value.formData();
    formData;
    const blob = response.value.blob();
    blob;
    const json = response.value.json();
    json;
    const text = response.value.arrayBuffer();
    text;
    const url = response.value.url;
    url;
    const status = response.value.status;
    status;
    const statusText = response.value.statusText;
    statusText;
    const type = response.value.type;
    type;
    const body = response.value.body;
    body;
    const bodyUsed = response.value.bodyUsed;
    bodyUsed;
    const redirected = response.value.redirected;
    redirected;
    const clone = response.value.clone();
    clone;
  }
});
