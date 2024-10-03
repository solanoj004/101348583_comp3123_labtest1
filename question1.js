// Jacob Solano
// 101348583
// Lab Test 1

// Question 1
// Function to filter and lower case words from a mixed array using splice on the original array
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    // If user input is not an array or empty
    if (!Array.isArray(mixedArray) || mixedArray.length === 0) {
      reject("Please input a non-empty array.");
    }
    // Iterate through the array backwards
    // mixedArray starts as ['Pizza', 10, true, 25, false, 'Wings']
    // Iterate backwards to avoid skipping elements when splicing
    for (let i = mixedArray.length - 1; i >= 0; i--) {
      if (typeof mixedArray[i] === "string") {
        // Convert to lowercase if it's a string
        mixedArray[i] = mixedArray[i].toLowerCase();
      } else {
        // Remove current index if it's not a string
        mixedArray.splice(i, 1);
      }
    }
    // Resolve the promise with the result if there are words, otherwise reject
    if (mixedArray.length > 0) {
      resolve(mixedArray);
    } else {
      reject("No valid strings found in the input array");
    }
  });
};

// Test case from the document
const mixedArray = ["Pizza", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log("New array:", result);
  })
  .catch((error) => console.error(error));
