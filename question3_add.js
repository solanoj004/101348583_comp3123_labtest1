// Jacob Solano
// 101348583
// Lab Test 1

// Question 3 - add.js

const fs = require('fs').promises;
const path = require('path');

const createLogFiles = async () => {
  try {
    // Get the current working directory
    const cwd = process.cwd();

    // Use current working directory to create a path
    const logsDir = path.join(cwd, 'Logs');

    // Create Logs directory if it doesn't exist
    // Recursive set to true for ease of use when my lab test github repository is cloned
    await fs.mkdir(logsDir, { recursive: true });

    // Change the current working directory to Logs
    process.chdir(logsDir);

    // Create 10 log files with some text
    // This array would be used to output the file names
    const createdFiles = [];
    for (let i = 1; i <= 10; i++) {
      // Creates log files numbered from 1 to 10
      const fileName = `log_${i}.txt`;
      // Content inside the log file
      const content = `Hi. My name is Jacob. This is log file #${1}`;
      // use writeFile to create/overwrite the log files
      await fs.writeFile(fileName, content);
      // Appends file 
      createdFiles.push(fileName);
    }

    // Output file names to console
    console.log('These are the log files that were created:');
    createdFiles.forEach(file => console.log(file));

  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

createLogFiles();
