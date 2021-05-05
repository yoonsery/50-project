## ✍🏻

`const length = +lengthEl.value;`<br>
add + to convert a string to a number<br>
console.log(length, typeof length); // 20 "number"

**Object.values()** <br>
returns an array of a given object's own enumerable property values

**Object.keys()**<br>
returns an array of a given object's own enumerable property names

### additional effect

**add shuffle array function**

```
function shuffleArrayOrder(array) {
  return array.sort(() => Math.random() - 0.5);
}
```

**add clipboard** <br>
`document.execCommand('copy')`
