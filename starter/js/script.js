// Pseucoding to implement the code quiz
// Done! Create a button that would enable the user to start the game
// Prompt the user for his input
// Link the start button to another html page where we provide different guess options to the user
// Set a time limit that prompts the user for his input
// When the user clicks on the start button, the time should reset
// When a user presses a letter key, the user's guess should be captured as a key event.
// Create a key event that captures the user word guess -> i.e. when the user presses a key
// Initialise the wins counts
// The user wins after guessing all the letters
// A message should appear and the timer should stop
// The corresponding blank "_" should be replaced by the letter
// Initialise the losses counts
// The user looses when the timer runs out before he guesses all the letters
// A message should appear and the timer should stop
// Display the wins and losses status on the screen to enable the user to track his score
// Ensure the score remains the same when the user refreshes the browser page
// Bonus! Add a reset button to sets the wins and losses counts back to zero

// Initialise questions arrays
var questions = [
    {
        prompt : "Commonly used data types DO Not Include: \n 1. strings \2. boolean \3. alert \4. numbers.",
        answer : '3'
    },
    {
        prompt : "The condition in an if/else statement is enclosed with ______: \n 1. quoted \2. curly brackets \3. parenthesis \4. square brackets",
        answer : '3'
    },
    {
        prompt : "Arrays in JavaScript can be used to store ______: \n 1. number and strings \2. other arrays \3. boolean \4. all of the above",
        answer : '4'
    },
    {
        prompt : "String values must be enclosed within ______ when being assigned to variables: \n 1. commas \2. curly brackets \3. quotes \4. parenthesis",
        answer : '3'
    },
    {
        prompt : "A very useful tool used during development and debugging for printing content to the debugger: \n 1. JavaScript \2. terminal / bash \3. for loops \4. console.log",
        answer : '4'
    }
]

var wins = 0;
var losses = 0;