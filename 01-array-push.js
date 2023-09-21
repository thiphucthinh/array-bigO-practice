/* Array practice

//Identify the time complexity of each of these functions with a 1 sentence
//justification for your answer. Assume `arr` is an array of length _n_.

//You may find the following code helpful for testing your code:

// 1. ) arr.push()

function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    const startTime = performance.now();
    res.push(randomNumber);
    // res[res.length] = randomNumber
    // res.length -1;
    const endTime = performance.now();
    console.log(endTime - startTime);
  }

  return res;
}

randomNumberArr(100);

Use the randomNumberArr function and the following pushTest
function to test the runtime of JavaScript's push with different
array sizes. The pushTest function iterates n number of times
where n is the size of an array, and pushes each element into a new array.


function pushTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
}


Test pushTest with a variety of inputs and run timing benchmarks
to identify the runtime.

Here's a sample test that prints the amount of time that it takes
to run the pushTest function with an array size of 100000:


//Time complexity: O(?)
//Space complexity: O(?)
//[push docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
************************/

function pushTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {

    const startTime = performance.now();
    arr.push(i);
    const endTime = performance.now();
    console.log(endTime - startTime);
  }

  return arr;
}

// Testing
pushTest(100);

//Time complexity: O(1)
//Space complexity: O(1)
