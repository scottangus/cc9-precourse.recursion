/* exported rockPaperScissors */

/*
 * Write a function that generates every sequence of throws a single
 * player could play over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ...etc...
 *   ]
 *
 * After you finish it, change your function so that it return answers for any number of rounds.
 * Example:
 *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
 */

const rockPaperScissors = (input) => {
  const length = (input === undefined) ? 3 : input;
  var options = ["rock","paper","scissors"];
  var results = [];
  function recursion(roundsRemaining, gameArray){
    if (roundsRemaining === 0) {
      results.push(gameArray);
      return;
    }
    options.forEach(function(element){
      //gameArray.push(element);
      recursion(roundsRemaining - 1, gameArray.concat(element));
    })
  }
  recursion(length, []);
  //console.log(results);
  return results;
};
