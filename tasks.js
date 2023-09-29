// Initialize an array to store tasks
const tasks = ["Task 1", "Task 2", "Task 3"];

/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  const input = text.trim();
  const parts = input.split(' ');
  const command = parts[0];
  const argument = parts.slice(1).join(' ');

  if (command === 'quit' || command === 'exit') {
    quit();
  } else if (command === 'list') {
    listTasks(); // Call the listTasks function to display tasks
  } else if (command === 'hello') {
    hello(argument);
  } else if (command === 'help') {
    help();
  } else if (command === 'remove') {
    const taskPosition = parseInt(argument) - 1; // Convert the argument to a number
    removeTaskByPosition(taskPosition);
  } else if (command === 'edit') {
    const editParts = argument.split(' ');
    if (editParts.length === 0) {
      console.log('Invalid edit command. Usage: edit [index] [new text]');
    } else if (editParts.length === 1) {
      const newText = editParts[0];
      editTask(tasks.length - 1, newText); // Edit the last task
    } else if (editParts.length === 2) {
      const taskIndex = parseInt(editParts[0]) - 1;
      const newText = editParts[1];
      editTask(taskIndex, newText);
    } else {
      console.log('Invalid edit command. Usage: edit [index] [new text]');
    }
  } else {
    unknownCommand(text);
  }
}

/**
 * Prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  if (text) {
    console.log(`hello ${text}!`);
  } else {
    console.log('hello!');
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!');
  process.exit(0);
}

/**
 * Removes a task by its position in the list
 *
 * @param {number} position the position of the task to be removed
 * @returns {void}
 */
function removeTaskByPosition(position) {
  if (position < 0 || position >= tasks.length) {
    console.log('Task position does not exist.');
  } else {
    const removedTask = tasks.splice(position, 1);
    console.log(`Removed task: "${removedTask}"`);
  }
}

/**
 * Edits a task by its index
 *
 * @param {number} index the index of the task to be edited
 * @param {string} newText the new text for the task
 * @returns {void}
 */
function editTask(index, newText) {
  if (index < 0 || index >= tasks.length) {
    console.log('Task number does not exist.');
  } else {
    tasks[index] = newText;
    console.log(`Task ${index + 1} edited to: "${newText}"`);
  }
}

// Function to list tasks
function listTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}


function help() {
  console.log('Available commands:');
  console.log('hello [name] - Say hello');
  console.log('list - List all tasks with task numbers');
  console.log('remove [position] - Remove a task by its position in the list');
  console.log('edit [index] [new text] - Edit a task by its index');
  console.log('quit or exit - Quit the application');
}
startApp("MOUHMAD Al Sallomi");