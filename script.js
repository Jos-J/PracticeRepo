// 20 clean dishes in the dishwasher
let dishwasher = ['plate', 'bowl', 'cup', 'knife', 'fork',
    'spoon', 'plate', 'spoon', 'bowl', 'cup',
    'knife', 'cup', 'cup', 'fork', 'bowl',
    'fork', 'plate', 'cup', 'spoon', 'knife'];

// Function to get a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Process each dish in the dishwasher
while (dishwasher.length > 0) {
let dish = dishwasher[0];  // Get the first dish from the array

// Check space left in the cabinet
if (getRandomInt(0, 19) === 0) {
console.log('Out of space!');
break;
} else {
console.log(`Putting ${dish} in the Cabinet`);
dishwasher.splice(0, 1);  // Remove the first dish from the dishwasher
}
}
