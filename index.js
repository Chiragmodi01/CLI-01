
var readlineSync = require("readline-sync");

const chalk = require('chalk');
const log = console.log;

var score = 0;


// Input > Processing > Output

var userName = readlineSync.question("What's your name? ");
console.log(chalk.bgRed.bold("Welcome " + userName + " , let's play MEME MASALA and MYSELF!"));
console.log("                  ");

// Function
console.log(chalk.yellow.bold("Key: Keep first letter Capital."))

console.log("                  ");
console.log("                  ")



// Q1



var questionOne = "Am I legally old enough to drink old monk? ";
var answerOne = "Yes";


function play(question, answer) {
  // input
  var userAnswer = readlineSync.question(question);

  console.log(chalk.red.bold("Ans:   " + answer));

  // processing
  if (userAnswer === answer) {
    // output
    console.log(chalk.green.bold("Cheers mate!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("sip your orange juice!"));
    score = score - 1;
    console.log("Score: " + score);
  }
}

play(questionOne, answerOne)




// Q2


var questionTwo = "Am I from the state Maharastra? ";
var answerTwo = "No";
 console.log("                  ");
console.log("                  ")

 // input
  var userAnswer = readlineSync.question(questionTwo);

  console.log(chalk.red.bold("Ans:   " + answerTwo));

  // processing
  if (userAnswer === answerTwo) {
    // output
    console.log(chalk.green.bold("I know you followed me to my house!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("Tumchi mumbai!"));
    score = score - 1;
    console.log("Score: " + score);
    console.log("                  ");
     console.log("                  ")
}



// Q3

var questionThree = "Does my city has more water than Mars? ";
var answerThree = "No";


 // input
  var userAnswer = readlineSync.question(questionThree);

  console.log(chalk.red.bold("Ans:   " + answerThree));

  // processing
  if (userAnswer === answerThree) {
    // output
    console.log(chalk.green.bold("Right,Im Thirsty as hell!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("I havent bathed since a week!"));
    score = score - 1;
    console.log("Score: " + score);
 console.log("                  ");
  console.log("                  ")
}



// Q4


var questionFour = "By the last answer what do you think my state is? ";
var answerFour = "Rajasthan";

 // input
  var userAnswer = readlineSync.question(questionFour);

  console.log(chalk.red.bold("Ans:   " + answerFour));

  // processing
  if (userAnswer === answerFour) {
    // output
    console.log(chalk.green.bold("Padharo Mhare Des!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("Rajasthan!"));
    score = score - 1;
    console.log("Score: " + score);
     console.log("                  ");
      console.log("                  ")
}




// Q5


var questionFive = "Should your Gf split the Bill everytime? ";
var answerFive = "Yes";

// input
  var userAnswer = readlineSync.question(questionFive);

  console.log(chalk.red.bold("Ans:   " + answerFive));

  // processing
  if (userAnswer === answerFive) {
    // output
    console.log(("My Man!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("Phemenist!"));
    score = score - 1;
    console.log("Score: " + score);
     console.log("                  ");
      console.log("                  ")
}


// Q6

var questionSix = "Should tik tok have been banned? ";
var answerSix = "Yes";

 // input
  var userAnswer = readlineSync.question(questionSix);

  console.log(chalk.red.bold("Ans:   " + answerSix));

  // processing
  if (userAnswer === answerSix) {
    // output
    console.log(chalk.green.bold("har har Modi!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("You twerk looking at the mirror!"));
    score = score - 1;
    console.log("Score: " + score);
     console.log("                  ");
     console.log("                  ")
}

// Q7
var questionSeven = "Do you know how to pronounce Louis Vuitton? ";
var answerSeven = "No";

 // input
  var userAnswer = readlineSync.question(questionSeven);

  console.log(chalk.red.bold("Ans:   " + answerSeven));

  // processing
  if (userAnswer === answerSeven) {
    // output
    console.log(chalk.green.bold("Richy Rich!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("You wear Abibas!"));
    score = score - 1;
    console.log("Score: " + score);
     console.log("                  ");
     console.log("                  ")
}


// Q8

var questionEight = "Do i have Netflix subscription? ";
var answerEight = "No"


 // input
  var userAnswer = readlineSync.question(questionEight);

  console.log(chalk.red.bold("Ans:   " + answerEight));

  // processing
  if (userAnswer === answerSeven) {
    // output
    console.log(chalk.green.bold("Telegram zindabad!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("Ever heard of Telegram?"));
    score = score - 1;
    console.log("Score: " + score);
     console.log("                  ");
      console.log("                  ")
}


// Q9

var questionNine = "Who's always asking for Chai? ";
var answerNine = "Dilwale"


 // input
  var userAnswer = readlineSync.question(questionNine);

  console.log(chalk.red.bold("Ans:   " + answerNine));

  // processing
  if (userAnswer === answerNine) {
    // output
    console.log(chalk.green.bold("waa bi waa!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("'Dilwale puchdene Chaaaa'"));
    score = score - 1;
    console.log("Score: " + score);
     console.log("                  ");
      console.log("                  ")
}


// Q10



var questionTen = "Which Youtuber has done the most hardwork? ";
var answerTen = "Amit Bhadana"


 // input
  var userAnswer = readlineSync.question(questionTen);

  console.log(chalk.red.bold("Ans:   " + answerTen));

  // processing
  if (userAnswer === answerNine) {
    // output
    console.log(chalk.green.bold("Katai zehar!"));
    score = score + 1;
    console.log("Score: " + score)
  } else {
    // output
    console.log(chalk.green.bold("'Mene ki hai mehnat'"));
    score = score - 1;
    console.log("Score: " + score);
     console.log("                  ");
      console.log("                  ")
}

console.log(chalk.bgCyan.bold("Final Score: count yourself! "));
  console.log("                  ");
      console.log("                  ")




console.log(chalk.magenta.bold("Yeah....you sucessfully waisted 2 minutes, Your maggi must have been burnt!"))
console.log("                  ")
console.log(chalk.magenta.bold("but thanks tho!"))
