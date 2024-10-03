// Jacob Solano
// 101348583
// Lab Test 1
// Question 2

// Function that resolves a promise after 500ms
const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("delayed success");
    }, 500);
  });
};

// Function that rejects a promise after 500ms
const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("error: delayed exception!");
    }, 500);
  });
};

// Function to call both promises
const callBothPromises = async () => {
  try {
    // Call resolvedPromise and log the result
    const successMessage = await resolvedPromise();
    console.log("Resolved Promise:", successMessage);
  } catch (error) {
    console.error("Resolved Promise Error:", error);
  }

  try {
    // Call rejectedPromise and log the result
    await rejectedPromise();
  } catch (error) {
    console.error("Rejected Promise Error:", error);
  }
};

// Call both promises
callBothPromises();
