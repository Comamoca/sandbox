import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const atrUrl = "https://ablaze.one/"
let url = new URL(atrUrl, import.meta.url).toString();

fetch(url).then((responce) => {
  if (!responce.ok) {
    throw new Error("Error!");
  }
  console.log(`get data from "${url}"`);
  return responce.text();
})
.then((data) => {
  // console.log(data);
  
  const doc = new DOMParser().parseFromString(data, "text/html")!
  const title = doc.querySelector('title')!;
  console.log(title.textContent);
})
.catch((error) => {
  console.error(error.message);
})
