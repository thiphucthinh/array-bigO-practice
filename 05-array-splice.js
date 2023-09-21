// 5. ) arr.splice()

// Time complexity: O(?)
// Space complexity: O(?)
//[splice docs ]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


function spliceTest(arr) {
    let startIndex;

    for (let i = 0; i < arr.length; i++) {
        // startIndex = randomInRange(0, arr.length - 1);
        startIndex = arr.length / 2;

        const startTime = performance.now();
        arr.splice(startIndex, 1);
        const endTime = performance.now();
        console.log(endTime - startTime);
    }
    return arr;
}


// function randomInRange(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// Testing
// function generateArr(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

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


const arr1 = randomNumberArr(100);;
spliceTest(arr1);

// Time complexity: O(n^2)
// Space complexity: O(1)
