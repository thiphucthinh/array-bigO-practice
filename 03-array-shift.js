// 3. ) arr.shift()

// function shiftTest(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n; i++) {
//       arr.shift();
//     }

//     return arr;
//   }

  /*
  Before running the test, what do you think the
  time complexity of the JavaScript Array shift is?
  Take a few moments with your pair and discuss it.

  Use this function to test the JavaScript Array shift method.
  Feel free to play around with the function or test something
  you and your pair would like to try.
  */

  // Time complexity: O(?)
  // Space complexity: O(?)
  //[shift docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift



function shiftTest(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {

        const startTime = performance.now();
        arr.shift();
        const endTime = performance.now();
        console.log(endTime - startTime);
    }

    return arr;
}

// Testing
const arr = Array.from({ length: 100 }, (_, index) => index + 1);
shiftTest(arr);

//Time complexity: O(n)
//Space complexity: O(1)
