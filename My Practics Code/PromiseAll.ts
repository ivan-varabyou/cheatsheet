
async function promiseAll<T>(values: Promise<T>[]): Promise<T[]>  {
    const response: T[] = [];
    for (const value of values) {
        try {
            response.push(await value);
        } catch (error) {
            throw new Error(error)
        }
    }
    return response;
}


const UrlsJSONPlaceholder = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

const get = (url) => fetch(url)
const toJSON = (response) => response.JSON()

const test1 = Promise.all(UrlsJSONPlaceholder.map((url) => get(url))).then(
  (response) => response.map((v) => v.statusText))
); test1
const test2 = promiseAll(UrlsJSONPlaceholder.map((url) => get(url))).then(
  (response) => response.map((v) => v.statusText))
); test2


const test3 = Promise.all(UrlsJSONPlaceholder.map((url) => get(url))).then(
   ([response]) => {
        const formData = response.formData(); formData;
        const blob = response.blob(); blob;
        const json = response.json(); json;
        const text = response.arrayBuffer(); text;
        const url = response.url; url;
        const status = response.status; status;
        const statusText = response.statusText; statusText;
        const type = response.type; type;
        const body = response.body?.pipeTo().then(value => value); body;
        const bodyUsed = response.bodyUsed; bodyUsed;
        const redirected = response.redirected; redirected;
        const clone = response.clone(); clone;
    }
);