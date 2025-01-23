// // 20 clean dishes in the dishwasher
// let dishwasher = ['plate', 'bowl', 'cup', 'knife', 'fork',
//     'spoon', 'plate', 'spoon', 'bowl', 'cup',
//     'knife', 'cup', 'cup', 'fork', 'bowl',
//     'fork', 'plate', 'cup', 'spoon', 'knife'];

// // Function to get a random integer between min (inclusive) and max (inclusive)
// function getRandomInt(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Process each dish in the dishwasher
// while (dishwasher.length > 0) {
// let dish = dishwasher[0];  // Get the first dish from the array

// // Check space left in the cabinet
// if (getRandomInt(0, 19) === 0) {
// console.log('Out of space!');
// break;
// } else {
// console.log(`Putting ${dish} in the Cabinet`);
// dishwasher.splice(0, 1);  // Remove the first dish from the dishwasher
// }
// }


// function gcd(a, b) {
//     while (b !== 0) {
//         let t = a;
//         a = b;
//         b = t % b;
//     }
//     return a;
// }

// console.log(gcd(60, 96));
// console.log(gcd(20, 8));


function selectionSortArray( arr) {
    // loop through the entire array
    for ( let i = 0; i < arr.length - 1; i++) {
        // Assume the first unsorted element is the smallest
        let minIndex = 1;

        // Find the index of the smallest element in the unsorted portion
        for ( let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the smalles element with the first element of the unsorted portion
        if(minIndex !==i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }    
}