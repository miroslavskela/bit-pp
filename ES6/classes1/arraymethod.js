// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(accumulator, currentValue) {
//       return accumulator.concat(currentValue);
//     },
//     []
//   );
//   // flattened is [0, 1, 2, 3, 4, 5]

//   [[1, 2, 3], [4, 5], [6]];
//    Your code here.
//    → [1, 2, 3, 4, 5, 6]



  let arrayNums = [[1,2,3], [4,5],[6]].reduce(
      function(accumulator, currentValue){
          return accumulator.concat(currentValue)
      }
  );


  console.log(arrayNums);
  let arr = [1,3,5]
  console.log(arr.every(n => n < 10));

  