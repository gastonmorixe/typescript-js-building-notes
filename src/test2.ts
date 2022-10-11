// <reference lib="es5" />
// <reference lib="dom" />
// <reference lib="webworker.importscripts" />
// <reference lib="scripthost" />

import { myFristName } from "./test"

import wallpaperImage from "./assets/image.jpg"

const welcome = `Hello ${myFristName}!`

// window.

globalThis.requestAnimationFrame(() => {
  globalThis.alert("hello")
  alert("byye")
})

console.log("Hey ", welcome, wallpaperImage)
