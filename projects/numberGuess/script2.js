// Select various elements from the DOM and assign them to variables for later use.
let ges = document.querySelector('.guess'); // Input field for user guesses
let num = document.querySelector('.number'); // Element to display the range of numbers or the correct guess
let msg = document.querySelector('.message'); // Element to display messages to the user
let check = document.querySelector('.check'); // Button for submitting the guess
let scr = document.querySelector('.score'); // Element to display the current score
let highScr = document.querySelector('.highscore'); // Element to display the high score
let body = document.querySelector('body'); // The body element for changing styles
let again = document.querySelector('.again'); // Button to reset the game

// Initial game setup
let number = Math.trunc(Math.random() * 20 + 1); // Random number between 1 and 20, truncated to remove decimals
let score = 20; // Starting score for the player
let highscore = 0; // Starting high score, initially 0
let message = ''; // Message to display to the user
let guess; // Variable to store the user's current guess

// Initial display setup
num.textContent = '1-20'; // Display the range of possible numbers
msg.textContent = 'Guess the Number..!'; // Initial message to guide the user

// Function to update the message displayed to the user
function setMessage(message) {
  msg.textContent = message; // Set the text content of the msg element to the provided message
}

// Event listener for the check button
check.addEventListener('click', logic); // Calls the logic function when the check button is clicked
again.addEventListener('click', refresh); // Calls the refresh function when the again button is clicked

// Function containing the game logic
function logic() {
  guess = Number(ges.value); // Get the user's guess from the input field and convert it to a number
  console.log(guess); // Log the guess to the console for debugging
  console.log(typeof guess); // Log the type of the guess variable to ensure it is a number

  // Check if the score is still above 1 to continue game play
  if (score >= 1) {
    if (!guess) {
      // If no number is guessed (e.g., an empty input)
      setMessage(' No Number..! ');
    } else if (guess == number) {
      // If the user's guess is correct
      message = ' Correct Guess, You Won..! ';
      highscore = score > highscore ? score : highscore; // Update high score if current score is greater

      setMessage(message); // Update the displayed message
      num.textContent = number; // Display the correct number
      highScr.textContent = highscore; // Update the displayed high score
      scr.textContent = score; // Update the displayed score

      num.style.width = '30rem'; // Increase the width of the number element
      body.style.backgroundColor = '#60b347'; // Change the background color to indicate a win
    } else if (guess != number) {
      // If the guess is wrong
      message = guess > number ? ' Value is Too High ' : ' Value is Too Low '; // Check if too high or too low
      score--; // Decrement the score

      scr.textContent = score; // Update the displayed score
      setMessage(message); // Update the displayed message
    }
  } else {
    setMessage('You lost the game!'); // Display losing message
    scr.textContent = 0; // Set score to 0
  }
}

// Function to reset the game
function refresh() {
  number = Math.trunc(Math.random() * 20 + 1); // Reset the number
  score = 20; // Reset the score

  scr.textContent = score; // Update the displayed score
  num.textContent = '1-20'; // Reset the number display
  msg.textContent = 'Guess the Number..!'; // Reset the message display
  ges.value = ''; // Clear the guess input field
  body.style.backgroundColor = '#222'; // Reset the background color
  num.style.width = '15rem'; // Reset the width of the number element
}

// Log the initial random number to the console for debugging
console.log(number);
