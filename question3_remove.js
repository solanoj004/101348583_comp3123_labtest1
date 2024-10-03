// Jacob Solano
// 101348583
// Lab Test 1

// Question 3 - remove.js

const fs = require("fs").promises;
const path = require("path");

const removeLogFiles = async () => {
  try {
    // Get the current working directory
    const cwd = process.cwd();

    // Use current working directory to create a path
    const logsDir = path.join(cwd, "Logs");

    // Check if Logs directory exists
    const dirExists = await (async () => {
      try {
        await fs.access(logsDir);
        return true;
      } catch {
        return false;
      }
    })();

    if (!dirExists) {
      console.log("Logs directory does not exist. Create the directory first.");
      return;
    }

    // Read the contents of the Logs directory
    // Puts all file names inside an array
    const files = await fs.readdir(logsDir);

    console.log("Files to be deleted:");
    // Uses the files array and logs the names of the files to be deleted
    files.forEach((file) => console.log(file));

    // Remove all files in the Logs directory
    for (const file of files) {
      await fs.unlink(path.join(logsDir, file));
    }

    // Remove the Logs directory
    await fs.rmdir(logsDir);

    console.log("All log files and Logs directory have been removed successfully.");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

removeLogFiles();
