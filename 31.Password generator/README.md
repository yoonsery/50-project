## ✍🏻

`const length = +lengthEl.value;`
add + to convert a string to a number
console.log(length, typeof length); // 20 "number"

**Object.values()**
returns an array of a given object's own enumerable property values

**Object.keys()**
returns an array of a given object's own enumerable property names

### additional effect

**add shuffle array function**

```
function shuffleArrayOrder(array) {
  return array.sort(() => Math.random() - 0.5);
}
```
