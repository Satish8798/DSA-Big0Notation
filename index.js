// const everyone = ['sati', 'dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat'
//   , 'squir', 'darla', 'hank', 'jjjjj', 'jdfjkds'];

// const large = new Array(100).fill('nemo')

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('found Nemo!!')
//     }
//   }
// }

// findNemo(large); //O(n) --> linear time

boxes=[0,1,2,3,4,5,6]

function logFirstTwoBoxes(boxes){
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);  // O(1) -->constant time