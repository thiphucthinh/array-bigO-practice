// 4. ) arr.unshift()

/*
Before running the test, what do you think the
time complexity of the JavaScript Array unshift is?

Use this function to test. Feel free to play
around with the function or test something you would
like to try.
*/

// function unshiftTest(n) {
//     const arr = [];

//     for (let i = 0; i < n; i++) {
//       arr.unshift(i);
//     }

//     return arr;

// }

  /*
  Based on your benchmarks, was your original hypothesis
  correct? Remember, the unshiftTest function is executing
  the unshift method n number of times where n is the array size.
  */

  // Time complexity: O(?)
  // Space complexity: O(?)
  //[ unshift docs ]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

function unshiftTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        const startTime = performance.now();
        arr.unshift(i);
        const endTime = performance.now();
        console.log(endTime - startTime);
    }

    return arr;

}

// Testing
unshiftTest(100);

//Time complexity: O(n)
//Space complexity: O(1)
