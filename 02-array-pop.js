/*******************************************
// 2. ) arr.pop()

function popTest(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      arr.pop();
    }

    return arr;
  }

  /*
  Use the popTest function to test the JavaScript Array pop method.
  Test it the same way as you tested the pushTest method. Play around
  with different input sizes until you have a good grasp of the time
  complexity of Array's pop method.
  */

  // Time complexity: O(?)
  // Space complexity: O(?)
  // Justification: _Fill this in_
  //[pop docs] : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

function popTest(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {

        const startTime = performance.now();
        arr.pop();
        const endTime = performance.now();
        console.log(endTime - startTime);
    }

    return arr;
}

// Testing
// Option 1 for generating an array
function generateArr(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(i);
    }
    return arr;
}

// Option 1 for generating an array: Using Array.from
const arr = Array.from({ length: 100 }, (_, index) => index + 1);
// Create an array with 100 elements

popTest(100);

//Time complexity: O(1)
//Space complexity: O(1)
