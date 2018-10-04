
const game = () => {
  let yourScore = 0;
  let computerScore = 0;

  while (yourScore < 5 && computerScore < 5)
  {
    let playerSelection = prompt('Enter rock, paper, or scissors?');
    let computerSelection = computerPlay();
    let play = playRound(playerSelection, computerSelection);
    console.log(play);

    if (play.includes('You win'))
    {
      yourScore++;
    }
    else if (play.includes('You lose'))
    {
      computerScore++;
    }

    console.log(`Your score: ${yourScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (yourScore === 5)
    {
      console.log('Game over! You beat the computer!');
    }
    else if (computerScore === 5)
    {
      console.log('Game over! You lost to a compueter!')
    }
  }
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock')
  {
    if (computerSelection === 'rock')
    {
      return 'Tie! You both selected Rock';
    }
    else if (computerSelection === 'paper')
    {
      return 'You lose! Paper beats Rock';
    }
    else if (computerSelection === 'scissors')
    {
      return 'You win! Rock beats Scissors';
    }
  }
  else if (playerSelection === 'paper')
  {
    if (computerSelection === 'rock')
    {
      return 'You win! Paper beats Rock';
    }
    else if (computerSelection === 'paper')
    {
      return 'Tie! You both selected Paper';
    }
    else if (computerSelection === 'scissors')
    {
      return 'You lose! Scissors beats Paper';
    }
  }
  else if (playerSelection === 'scissors')
  {
    if (computerSelection === 'rock')
    {
      return 'You lose! Rock beats Scissors';
    }
    else if (computerSelection === 'paper')
    {
      return 'You win! Scissors beats Paper';
    }
    else if (computerSelection === 'scissors')
    {
      return 'Tie! You both selected scissors';
    }
  }
  else
  {
    return 'Please select rock, paper, or scissors!';
  }
}

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const computerPlay = () => {
  let computerNumber = getRandomInt(3);

  if (computerNumber === 0)
  {
    return 'rock';
  }
  else if (computerNumber === 1)
  {
    return 'paper';
  }
  else
  {
    return 'scissors';
  }
}

game();