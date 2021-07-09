// Implement the function once, which takes any function (fn) as an argument. Function once returns a new function that is restricted to invoking fn once. All the next invocations of the new function return the value of the first invocation.
const once1 = (fn) => {
  // Your code
  const func = fn
  let first = true
  let sum = 0
  return (a, b) => {
    if(first) {
        sum = func(a, b)
        first = false
        return sum
    } else {
        return sum
    }
  }
}

const once = (fn) => {
  // Your code
  const func = fn
  let sum = undefined
  return (a, b) => {
    return sum || (sum = func(a,b))
  }
}

const sum = (a, b) => a + b;

const onceSum1 = once(sum);

const onceSum2 = once(sum);

console.log(onceSum1(1, 3)); // => 4

console.log(onceSum1(5, 3)); // => 4


console.log(onceSum2(2, 7)); // => 9

console.log(onceSum2(5, 2)); // => 9

  