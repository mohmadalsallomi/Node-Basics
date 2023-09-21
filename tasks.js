
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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
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
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  const input = text.trim()
  const parts = input.split(' ')
  const command = parts[0]
  const argument = parts.slice(1).join(' ')

  if (command === 'quit\n' || command === 'exit\n' ) {
    quit();
  }
  else if(command === 'hello'){
    hello(argument);
  }
  else if(command === 'help\n'){   //here i add help like step of (hello)
    help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  if (text) {
    console.log(`hello ${text}!`) 
  }
  else {
    console.log ('hello!')
  }
}






/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit('Quitting now, goodbye!' );
}

// The following line starts the application
startApp("MOUHMAD Al Sallomi")

//to help the user woh we can help him 

function help() {
  console.log('hello\n quit\n exit\n')
  
}

